import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_og_images():
    w, h = 1200, 630
    
    # Base canvas: Warm luxury ivory parchment
    bg = Image.new('RGB', (w, h), (247, 242, 234))
    draw = ImageDraw.Draw(bg)
    
    # Soft warm vignette / texture
    gradient = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(gradient)
    # Subtle warm radial tone
    for i in range(16):
        alpha = int(2 + i * 1.5)
        pad = i * 14
        gdraw.rectangle([pad, pad, w - pad, h - pad], outline=(200, 180, 150, alpha), width=3)
    bg.paste(Image.alpha_composite(bg.convert('RGBA'), gradient).convert('RGB'))
    draw = ImageDraw.Draw(bg)
    
    # Ornate Gold Borders
    gold = (198, 166, 100)
    deep_gold = (158, 125, 59)
    charcoal = (26, 24, 20)
    maroon = (139, 30, 30)
    subtext_color = (107, 94, 80)
    
    # Outer rectangle
    draw.rectangle([24, 24, w - 24, h - 24], outline=gold, width=2)
    # Inner thin rectangle
    draw.rectangle([32, 32, w - 32, h - 32], outline=deep_gold, width=1)
    
    # Corner ornamental accents
    corner_size = 20
    for cx, cy in [(32, 32), (w - 32, 32), (32, h - 32), (w - 32, h - 32)]:
        # Draw diamond accent at corners
        draw.polygon([(cx - 4, cy), (cx, cy - 4), (cx + 4, cy), (cx, cy + 4)], fill=gold)
    
    # Load fonts
    font_script = ImageFont.truetype('editable/assets/GreatVibes.ttf', 96)
    font_cinzel_large = ImageFont.truetype('editable/assets/Cinzel.ttf', 20)
    font_cinzel_mid = ImageFont.truetype('editable/assets/Cinzel.ttf', 16)
    font_cinzel_small = ImageFont.truetype('editable/assets/Cinzel.ttf', 13)
    font_devanagari = ImageFont.truetype('editable/assets/RozhaOne.ttf', 28)
    font_serif_body = ImageFont.truetype('C:/Windows/Fonts/georgia.ttf', 17)
    font_serif_italic = ImageFont.truetype('C:/Windows/Fonts/georgiai.ttf', 16)
    
    # Left side: Royal Hindu couple illustration
    couple_path = 'editable/assets/layer-couple.png'
    if os.path.exists(couple_path):
        couple_img = Image.open(couple_path).convert('RGBA')
        # Scale couple image to fit height ~ 540px
        target_h = 540
        aspect = couple_img.width / couple_img.height
        target_w = int(target_h * aspect)
        couple_resized = couple_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Feather bottom edge so it blends into the parchment
        alpha_mask = couple_resized.split()[3]
        mask_draw = ImageDraw.Draw(alpha_mask)
        for y_step in range(target_h - 70, target_h):
            factor = max(0, 1.0 - (y_step - (target_h - 70)) / 70.0)
            for x_pix in range(target_w):
                orig_a = alpha_mask.getpixel((x_pix, y_step))
                alpha_mask.putpixel((x_pix, y_step), int(orig_a * factor))
        couple_resized.putalpha(alpha_mask)
        
        # Paste couple on left side centered vertically
        couple_x = 75
        couple_y = h - target_h - 26
        bg.paste(couple_resized, (couple_x, couple_y), couple_resized)
    
    # Right Side Content (x: 520 to 1140, center = 830)
    center_x = 815
    
    # 1. Auspicious Sanskrit Shloka
    shloka_text = "॥ ॐ श्री गणेशाय नमः ॥"
    shloka_bbox = draw.textbbox((0, 0), shloka_text, font=font_devanagari)
    shloka_w = shloka_bbox[2] - shloka_bbox[0]
    draw.text((center_x - shloka_w // 2, 52), shloka_text, fill=maroon, font=font_devanagari)
    
    # 2. Subtitle: WEDDING INVITATION
    inv_text = "W E D D I N G   I N V I T A T I O N"
    inv_bbox = draw.textbbox((0, 0), inv_text, font=font_cinzel_small)
    inv_w = inv_bbox[2] - inv_bbox[0]
    draw.text((center_x - inv_w // 2, 102), inv_text, fill=deep_gold, font=font_cinzel_small)
    
    # Thin ornamental divider
    line_w = 180
    draw.line([center_x - line_w // 2, 130, center_x + line_w // 2, 130], fill=gold, width=1)
    draw.polygon([(center_x - 3, 130), (center_x, 127), (center_x + 3, 130), (center_x, 133)], fill=gold)
    
    # 3. Main Couple Calligraphy: Groom's name FIRST! "Durgesh & Tripti"
    names_text = "Durgesh & Tripti"
    names_bbox = draw.textbbox((0, 0), names_text, font=font_script)
    names_w = names_bbox[2] - names_bbox[0]
    draw.text((center_x - names_w // 2, 140), names_text, fill=charcoal, font=font_script)
    
    # 4. Full Names
    full_text = "DURGESH PRATAP SINGH  &  TRIPTI SINGH"
    full_bbox = draw.textbbox((0, 0), full_text, font=font_cinzel_large)
    full_w = full_bbox[2] - full_bbox[0]
    draw.text((center_x - full_w // 2, 272), full_text, fill=(74, 62, 49), font=font_cinzel_large)
    
    # Second divider
    draw.line([center_x - 140, 312, center_x + 140, 312], fill=gold, width=1)
    
    # 5. Wedding Ceremonies & Dates
    events_data = [
        ("Ring Ceremony (Engagement)", "17 October 2026 · 11:00 AM", "Hotel Holiday Heights"),
        ("Haldi & Sangeet Celebrations", "2 December 2026 · 1:00 PM & 7:00 PM", "Awadh Castle"),
        ("Shubh Vivah (Wedding Ceremony)", "3 December 2026 · 7:00 PM onwards", "Awadh Castle")
    ]
    
    y_pos = 330
    for title, date_str, venue_str in events_data:
        # Event title
        t_bbox = draw.textbbox((0, 0), title, font=font_cinzel_mid)
        draw.text((center_x - (t_bbox[2] - t_bbox[0]) // 2, y_pos), title, fill=maroon, font=font_cinzel_mid)
        
        # Date & Venue
        detail_str = f"{date_str}  •  {venue_str}"
        d_bbox = draw.textbbox((0, 0), detail_str, font=font_serif_italic)
        draw.text((center_x - (d_bbox[2] - d_bbox[0]) // 2, y_pos + 22), detail_str, fill=subtext_color, font=font_serif_italic)
        y_pos += 54
    
    # 6. Bottom Pill: Hashtag & RSVP
    badge_text = "#DurgeshWedsTripti  ·  Tap to Open Invitation"
    b_bbox = draw.textbbox((0, 0), badge_text, font=font_cinzel_small)
    bw = b_bbox[2] - b_bbox[0] + 36
    bh = 28
    bx = center_x - bw // 2
    by = 512
    draw.rounded_rectangle([bx, by, bx + bw, by + bh], radius=14, outline=gold, fill=(255, 252, 247), width=1)
    draw.text((center_x - (b_bbox[2] - b_bbox[0]) // 2, by + 6), badge_text, fill=deep_gold, font=font_cinzel_small)
    
    # Save optimized 1.91:1 image for WhatsApp
    out_og = 'editable/assets/og-whatsapp.jpg'
    bg.save(out_og, 'JPEG', quality=88, optimize=True)
    og_size_kb = os.path.getsize(out_og) / 1024
    print(f"Created {out_og}: {w}x{h} px, {og_size_kb:.1f} KB")
    
    # Also create square 1:1 image (600x600 px) for compact WhatsApp thumbnails
    square_size = 600
    sq = Image.new('RGB', (square_size, square_size), (247, 242, 234))
    sq_draw = ImageDraw.Draw(sq)
    sq_draw.rectangle([14, 14, square_size - 14, square_size - 14], outline=gold, width=2)
    sq_draw.rectangle([20, 20, square_size - 20, square_size - 20], outline=deep_gold, width=1)
    
    # Center couple + names in square
    # Add Shloka
    s_shloka = "॥ ॐ श्री गणेशाय नमः ॥"
    s_bbox = sq_draw.textbbox((0, 0), s_shloka, font=font_devanagari)
    sq_draw.text(((square_size - (s_bbox[2] - s_bbox[0])) // 2, 34), s_shloka, fill=maroon, font=font_devanagari)
    
    # Couple script
    sq_script_font = ImageFont.truetype('editable/assets/GreatVibes.ttf', 72)
    sq_names_bbox = sq_draw.textbbox((0, 0), names_text, font=sq_script_font)
    sq_draw.text(((square_size - (sq_names_bbox[2] - sq_names_bbox[0])) // 2, 80), names_text, fill=charcoal, font=sq_script_font)
    
    # Couple Art centered
    if os.path.exists(couple_path):
        target_h_sq = 330
        aspect = couple_img.width / couple_img.height
        target_w_sq = int(target_h_sq * aspect)
        couple_sq = couple_img.resize((target_w_sq, target_h_sq), Image.Resampling.LANCZOS)
        sq.paste(couple_sq, ((square_size - target_w_sq) // 2, 175), couple_sq)
        
    # Date at bottom of square
    sq_date_text = "Wedding: 2-3 December 2026 · Awadh Castle"
    sq_d_bbox = sq_draw.textbbox((0, 0), sq_date_text, font=font_cinzel_small)
    sq_draw.text(((square_size - (sq_d_bbox[2] - sq_d_bbox[0])) // 2, 515), sq_date_text, fill=deep_gold, font=font_cinzel_small)
    
    sq_ht_text = "#DurgeshWedsTripti"
    sq_ht_bbox = sq_draw.textbbox((0, 0), sq_ht_text, font=font_cinzel_small)
    sq_draw.text(((square_size - (sq_ht_bbox[2] - sq_ht_bbox[0])) // 2, 545), sq_ht_text, fill=subtext_color, font=font_cinzel_small)
    
    out_sq = 'editable/assets/og-whatsapp-square.jpg'
    sq.save(out_sq, 'JPEG', quality=88, optimize=True)
    sq_size_kb = os.path.getsize(out_sq) / 1024
    print(f"Created {out_sq}: {square_size}x{square_size} px, {sq_size_kb:.1f} KB")

if __name__ == '__main__':
    create_og_images()
