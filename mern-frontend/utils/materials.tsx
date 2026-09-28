export const ASSET_PATH = (path: string) => `${import.meta.env.BASE_URL}src/assets/images/${path}`;

export const MATERIALS ={
    ICONS : {
        DOUBLE_ARROW_ICON: ASSET_PATH("icons/double_arrow_icon.png"),
        QUOTATION_MARK_ICON: ASSET_PATH("icons/quote_icon.png"),
        NO_STAR_ICON: ASSET_PATH("icons/no_star_rating_icon.png"),
        ONE_STAR_ICON: ASSET_PATH("icons/one_star_rating_icon.png"),
        TWO_STAR_ICON: ASSET_PATH("icons/two_star_rating_icon.png"),
        THREE_STAR_ICON: ASSET_PATH("icons/three_star_rating_icon.png"),
        FOUR_STAR_ICON: ASSET_PATH("icons/four_star_rating_icon.png"),
        FIVE_STAR_ICON: ASSET_PATH("icons/five_star_rating_icon.png"),
        SOCIAL_MEDIA_X_ICON: ASSET_PATH("icons/x_icon.png"),
        SOCIAL_MEDIA_INSTA_ICON: ASSET_PATH("icons/instagram_icon.png"),
        SOCIAL_MEDIA_TIKTOK_ICON: ASSET_PATH("icons/tiktok_icon.png"),
        SOCIAL_MEDIA_LINKEDIN_ICON: ASSET_PATH("icons/linkedin_icon.png"),
        ERROR_ICON: ASSET_PATH("icons/error_icon.png"),
        CORRECT_ICON: ASSET_PATH("icons/correct_icon.png"),
        ADD_ICON: ASSET_PATH("icons/add_icon.png")
    },

    BACKGROUNDS: {
        PATHS: {
            TESTIMONIAL_BACKGROUND: ASSET_PATH("backgrounds/kbs_background_3.png"),
            ADMIN_BACKGROUND: ASSET_PATH("backgrounds/kbs_background_1.png"),
            USER_BACKGROUND: ASSET_PATH("backgrounds/kbs_background_5.png"),
            CONTACT_SUPPORT_BACKGROUND: ASSET_PATH("backgrounds/kbs_background_4.png"),
        },

        CLASSES: {
           ADMIN_BACKGROUND: "background-one",
           USER_BACKGROUND: "background-five", 
        }
    },

    LOGOS: {
        KBS: ASSET_PATH("logos/KBS_Logo.jpg")
    }
}
