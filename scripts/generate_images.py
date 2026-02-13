"""
Titan Poker Bangkok — 网站配图生成 + 自动裁切脚本
==============================================
使用 Gemini 3 Pro Image Preview 2K 模型生成 7 张 2K 图片，
然后自动裁切为 ~20 张网站配图。

用法: python3 scripts/generate_images.py
"""

import os
import sys
import time
import base64
from pathlib import Path

from google import genai
from google.genai import types
from PIL import Image
from io import BytesIO

# ===== 配置 =====
API_KEY = "***REMOVED***"
MODEL = "gemini-3-pro-image-preview-2k"
BASE_URL = "https://api.apiyi.com"

# 输出目录
PROJECT_DIR = Path(__file__).parent.parent
OUTPUT_DIR = PROJECT_DIR / "public" / "images"
RAW_DIR = OUTPUT_DIR / "raw"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
RAW_DIR.mkdir(parents=True, exist_ok=True)

# ===== API 客户端 =====
client = genai.Client(
    api_key=API_KEY,
    http_options={"base_url": BASE_URL}
)

# ===== 图片定义 =====
# 每张 2K 图的 prompt 和裁切计划
IMAGES = [
    {
        "id": "img1_venues",
        "prompt": (
            "A 2x2 grid of four separate luxury poker venue photographs arranged in perfect quadrants, "
            "separated by thin pure black divider lines (3px). Each quadrant is exactly equal size. "
            "Top-left: an opulent poker room in Bangkok with golden chandeliers, mahogany tables, and warm amber lighting. "
            "Top-right: a tropical beachside poker lounge in Phuket with palm fronds visible, teak furniture, and ocean-blue accents. "
            "Bottom-left: a neon-lit modern poker club in Pattaya with city skyline through floor-to-ceiling windows, purple and gold lighting. "
            "Bottom-right: an elegant resort-style poker room in Hua Hin with white linen, ocean breeze curtains, and golden sunset light. "
            "All four photos share a consistent dark luxury aesthetic with gold accents. Professional architectural photography, "
            "cinematic quality, no text, no watermarks."
        ),
        "crops": [
            {"name": "venue_bangkok.jpg",  "box": (0, 0, 1024, 1024)},
            {"name": "venue_phuket.jpg",   "box": (1024, 0, 2048, 1024)},
            {"name": "venue_pattaya.jpg",  "box": (0, 1024, 1024, 2048)},
            {"name": "venue_huahin.jpg",   "box": (1024, 1024, 2048, 2048)},
        ]
    },
    {
        "id": "img2_poker_scenes",
        "prompt": (
            "A 2x2 grid of four separate poker game photographs arranged in perfect quadrants, "
            "divided by thin pure black lines (3px). Each quadrant is exactly equal size. "
            "Top-left: dramatic close-up of a Texas Hold'em game - two hole cards face up on premium green felt, "
            "community cards visible, stacks of gold and black chips gleaming under spotlight. "
            "Top-right: Omaha 5-card poker hands fanned out on a dark mahogany table, five colorful cards in a row, "
            "surrounded by crystal chip stacks. "
            "Bottom-left: tournament finals scene with dramatic back-lighting on players at a featured table, "
            "cameras and audience silhouettes, tension palpable. "
            "Bottom-right: action shot of a PLO tournament with a massive pot in the center, multiple players' hands visible, "
            "timer clock showing, professional dealing shoe. "
            "Dark cinematic lighting with gold and crimson tones. Professional photography, no text, no watermarks."
        ),
        "crops": [
            {"name": "game_holdem.jpg",       "box": (0, 0, 1024, 1024)},
            {"name": "game_plo.jpg",          "box": (1024, 0, 2048, 1024)},
            {"name": "tournament_holdem.jpg", "box": (0, 1024, 1024, 2048)},
            {"name": "tournament_plo.jpg",    "box": (1024, 1024, 2048, 2048)},
        ]
    },
    {
        "id": "img3_blog",
        "prompt": (
            "A 2x2 grid of four separate poker-themed editorial photographs arranged in perfect quadrants, "
            "divided by thin pure black lines (3px). Each quadrant is exactly equal size. "
            "Top-left: mysterious hands dealing cards under a single overhead lamp, shadowy figures, "
            "representing detection of poker cheating - film noir style. "
            "Top-right: a contemplative poker player staring at dwindling chip stack, dim moody lighting, "
            "representing overcoming a downswing - introspective mood. "
            "Bottom-left: a confident player standing up from a poker table, chips scattered, victorious gesture, "
            "dramatic golden backlighting - representing strategic play. "
            "Bottom-right: a glamorous VIP poker event with champagne glasses, golden decorations, "
            "elegantly dressed players at a premium table - representing a cash festival. "
            "Dark cinematic photography, each panel tells a different story. No text, no watermarks."
        ),
        "crops": [
            {"name": "blog_cheating.jpg",   "box": (0, 0, 1024, 1024)},
            {"name": "blog_downswing.jpg",  "box": (1024, 0, 2048, 1024)},
            {"name": "blog_standup.jpg",    "box": (0, 1024, 1024, 2048)},
            {"name": "blog_festival.jpg",   "box": (1024, 1024, 2048, 2048)},
        ]
    },
    {
        "id": "img4_hero",
        "prompt": (
            "Ultra-wide cinematic shot of a luxurious premium poker club interior. "
            "A beautifully crafted dark mahogany poker table with emerald green speed cloth in the center. "
            "Stacks of gleaming gold, black, and crimson poker chips artfully arranged. "
            "Royal flush of spades spread elegantly on the table. "
            "Crystal chandeliers overhead casting warm golden light with dramatic shadows. "
            "Dark wood-paneled walls with subtle gold trim. Leather chairs around the table. "
            "Background fades into deep black with bokeh golden light orbs. "
            "Atmosphere of exclusivity and high-stakes intensity. No people visible. "
            "Ultra-premium, dark and moody, wide angle lens, 8K professional photography. "
            "No text, no watermarks, no logos."
        ),
        "crops": [
            {"name": "hero_bg.jpg", "box": (0, 484, 2048, 1564)},  # 2048x1080 center crop
        ]
    },
    {
        "id": "img5_banners_top",
        "prompt": (
            "A vertically split image with two separate panoramic poker venue photographs, "
            "divided by a thin pure black horizontal line in the exact middle. Each half is exactly equal height. "
            "Top half: wide panoramic interior of a grand poker room with 8+ poker tables filling the space, "
            "warm golden chandelier lighting, players seated, dealers in uniform, premium carpet and wood furnishings - "
            "representing 'About Us'. "
            "Bottom half: perfect top-down bird's eye view of a single professional poker table, "
            "cards dealt in a game in progress, colorful chip stacks perfectly organized, timer clock, "
            "dealing shoe, and felt layout clearly visible on dark green surface - representing 'Games Schedule'. "
            "Both images share a dark luxury aesthetic with gold accents. Cinematic photography. "
            "No text, no watermarks."
        ),
        "crops": [
            {"name": "banner_about.jpg",    "box": (0, 0, 2048, 1024)},
            {"name": "banner_schedule.jpg", "box": (0, 1024, 2048, 2048)},
        ]
    },
    {
        "id": "img6_banners_bottom",
        "prompt": (
            "A vertically split image with two separate photographs, "
            "divided by a thin pure black horizontal line in the exact middle. Each half is exactly equal height. "
            "Top half: a magnificent golden trophy on a black marble pedestal, surrounded by scattered poker chips "
            "and playing cards, dramatic single spotlight from above creating a halo of golden light, "
            "deep black background with subtle sparkle particles - representing 'Rankings'. "
            "Bottom half: breathtaking Bangkok skyline at night from a high rooftop, "
            "skyscrapers glowing with amber and gold lights reflecting on the Chao Phraya river, "
            "warm humid atmosphere with subtle haze, ultra-cinematic cityscape - representing 'Contact'. "
            "Both premium quality. No text, no watermarks."
        ),
        "crops": [
            {"name": "banner_rankings.jpg", "box": (0, 0, 2048, 1024)},
            {"name": "banner_contact.jpg",  "box": (0, 1024, 2048, 2048)},
        ]
    },
    {
        "id": "img7_branding",
        "prompt": (
            "A luxurious social media banner and branding image for 'Titan Poker Club'. "
            "Center of the image features a large ornate golden crown symbol above bold golden letters 'TPC'. "
            "Beneath the crown and letters, subtle text area for 'TITAN POKER CLUB'. "
            "Background is deep black with radiating golden light rays emanating from behind the crown. "
            "Scattered poker chips and card suit symbols (spades, hearts, diamonds, clubs) in gold "
            "float subtly in the background. Premium matte black and gold color scheme. "
            "Clean, elegant, luxurious branding aesthetic. Symmetrical composition. "
            "No additional text, no watermarks. Professional brand identity design."
        ),
        "crops": [
            {"name": "og_social.jpg",  "box": (424, 709, 1624, 1339)},   # ~1200x630 center
            {"name": "logo_wide.png",  "box": (724, 624, 1324, 1424)},   # 600x800 center logo area
        ]
    },
]


def generate_image(prompt: str, image_id: str) -> Image.Image | None:
    """调用 Gemini API 生成图片"""
    print(f"\n🎨 正在生成: {image_id}")
    print(f"   Prompt: {prompt[:100]}...")

    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"]
            )
        )

        # 从响应中提取图片
        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                img_data = part.inline_data.data
                img = Image.open(BytesIO(img_data))
                print(f"   ✅ 生成成功! 尺寸: {img.size}")
                return img

        print("   ❌ 响应中未找到图片")
        return None

    except Exception as e:
        print(f"   ❌ 生成失败: {e}")
        return None


def crop_and_save(img: Image.Image, crops: list, image_id: str):
    """裁切图片并保存"""
    w, h = img.size
    print(f"\n✂️  裁切 {image_id} ({w}×{h}):")

    for crop_info in crops:
        name = crop_info["name"]
        # 原始裁切框（基于 2048×2048）
        ox1, oy1, ox2, oy2 = crop_info["box"]

        # 按实际图片尺寸等比缩放裁切坐标
        scale_x = w / 2048
        scale_y = h / 2048
        x1 = int(ox1 * scale_x)
        y1 = int(oy1 * scale_y)
        x2 = int(ox2 * scale_x)
        y2 = int(oy2 * scale_y)

        # 边界保护
        x1 = max(0, x1)
        y1 = max(0, y1)
        x2 = min(w, x2)
        y2 = min(h, y2)

        cropped = img.crop((x1, y1, x2, y2))

        # 保存
        out_path = OUTPUT_DIR / name
        if name.endswith(".png"):
            cropped.save(out_path, "PNG", optimize=True)
        else:
            cropped.save(out_path, "JPEG", quality=92, optimize=True)

        print(f"   ✅ {name}: {cropped.size[0]}×{cropped.size[1]} → {out_path}")


def main():
    print("=" * 60)
    print("🏆 Titan Poker Bangkok — 网站配图生成器")
    print("=" * 60)
    print(f"   模型: {MODEL}")
    print(f"   输出: {OUTPUT_DIR}")
    print(f"   总计: {len(IMAGES)} 张 2K 图 → ~20 张配图")
    print("=" * 60)

    total_crops = 0
    failed = []

    for i, img_def in enumerate(IMAGES):
        image_id = img_def["id"]
        prompt = img_def["prompt"]
        crops = img_def["crops"]

        print(f"\n{'─' * 50}")
        print(f"[{i+1}/{len(IMAGES)}] {image_id}")
        print(f"{'─' * 50}")

        # 生成图片
        img = generate_image(prompt, image_id)

        if img is None:
            failed.append(image_id)
            continue

        # 保存原始 2K 图
        raw_path = RAW_DIR / f"{image_id}.png"
        img.save(raw_path, "PNG")
        print(f"   💾 原始图保存: {raw_path}")

        # 裁切
        crop_and_save(img, crops, image_id)
        total_crops += len(crops)

        # API 速率限制保护
        if i < len(IMAGES) - 1:
            print("\n   ⏳ 等待 5 秒（API 速率限制）...")
            time.sleep(5)

    # 结果报告
    print(f"\n{'=' * 60}")
    print(f"📊 生成完成!")
    print(f"   成功: {len(IMAGES) - len(failed)}/{len(IMAGES)} 张 2K 图")
    print(f"   裁切: {total_crops} 张配图")
    if failed:
        print(f"   ❌ 失败: {', '.join(failed)}")
    print(f"   输出目录: {OUTPUT_DIR}")
    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()
