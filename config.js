const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports", "text": "Major league sports games" },
        { "value": "food_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_trendy", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "interested_but_not_very_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Jays Tickets Experience",
    "heroHeadline": "Win Tickets to the <span class='highlight'>Toronto Blue Jays</span> Game!",
    "heroSubheadline": "Celebrate Canada Day with a $100 Jays ticket giveaway! Join us on July 1st and take a chance to enjoy the excitement live.",
    "promotionDates": "Promotion runs on July 1, 2025 with winner announced on July 2, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/kjxgp60vhxrmc0cqfdy9ahx2fr.jpg",
    "heroCtaText": "Enter Now",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You’re In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays $100 Ticket Giveaway</strong> has been successfully submitted. Good luck!",
    "successModalEmailPrompt": "We will notify the winner by email shortly after the draw. Stay tuned!"
  },
  "prize": {
    "name": "$100 Toronto Blue Jays Game Tickets",
    "value": "$100 Value",
    "description": "Win tickets to the Toronto Blue Jays game this summer and enjoy the electrifying atmosphere with friends or family at one of Canada's premier sporting events!",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/vwjqmm1kcxrme0cqfdy8wxpy3m.jpg",
        "alt": "Blue Jays Tickets Image 1"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/90gnb8jazdrmc0cqfdya0xt8k4.jpg",
        "alt": "Blue Jays Tickets Image 2"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/4a0jhdk2znrme0cqfdy8xbrapw.jpg",
        "alt": "Blue Jays Tickets Image 3"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/t1k3hqvvphrma0cqfdybb0wkj8.jpg",
        "alt": "Blue Jays Tickets Image 4"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "$100 worth of tickets to a live Toronto Blue Jays game" },
      { "icon": "fas fa-users", "text": "Enjoy the game with family or friends" },
      { "icon": "fas fa-baseball-ball", "text": "Experience Canada's top baseball team in action" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy entry process" }
    ],
    "limitedTimeOfferText": "⚾ Limited Time Giveaway! ⚾",
    "ctaButtonText": "I WANT TO WIN!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-keyboard",
        "title": "Fill the Form",
        "description": "Enter your name and email address at our booth during the Canada Day event on July 1st."
      },
      {
        "icon": "fas fa-calendar-alt",
        "title": "Attend the Booth",
        "description": "Come visit us at the Canada Day event and experience the excitement live."
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Check Your Email",
        "description": "Winner will be notified via email on July 2nd. Keep an eye on your inbox!"
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Quick & Easy Entry" },
      { "icon": "fas fa-baseball-ball", "text": "Exclusive Toronto Blue Jays Experience" },
      { "icon": "fas fa-smile", "text": "Free to Enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below for a chance to win exclusive Jays tickets!",
    "entryCountText": "Join the growing crowd of baseball fans entering to win!",
    "socialSharePrompt": "Share the excitement with friends using the links below:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=Win tickets to the Toronto Blue Jays game this summer!"
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Square Selection",
      "text": "Winner selection is completely random and unbiased, conducted by a certified random number generator after the event. Everyone has an equal chance to win."
    },
    "importantNotice": {
      "title": "Winner Notification - Check Your Email!",
      "text": "The winner will be contacted via the email provided during entry. Please check your inbox, promotions, and spam folders regularly."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Legal residents of Toronto or nearby areas, 18 years or older at entry time."
      },
      {
        "q": "When does the giveaway end?",
        "a": "Entries are accepted only on July 1, 2025, with the winner drawn and announced on July 2, 2025."
      },
      {
        "q": "How will the winner be chosen?",
        "a": "One winner will be drawn at random from all valid entries received during the event."
      },
      {
        "q": "Must I be present to win?",
        "a": "Yes, entrants must attend the Canada Day event and submit their entry at our booth."
      },
      {
        "q": "Can I enter multiple times?",
        "a": "One entry per person/email address only. Duplicate entries will be disqualified."
      },
      {
        "q": "How is my data handled?",
        "a": "All information collected is used solely for this giveaway following the Privacy Policy. We do not sell your data."
      }
    ],
    "tips": [
      "Double-check your email address before submitting.",
      "Add shar@theskygroup.ca to your contacts to ensure you receive winner notifications.",
      "Follow Sky Group on social media for updates and winner announcements."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PMSJ5I%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T012310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDNhTCUUEyvwQJBqwPMaHnJdr4OTXNrahzIVMDdnxbQIgdHXEQg2ahz7%2FL5X65R4yGptftWmNJbi4wdQ0MSnH%2FkMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPR9LLGKqI9vT%2FOmJyrcA0MUrGjJJFM4nMdCjDWy1oy0LmBFRtAeUxJu2EPSMQ23NoDqFR1kPBVXK2Xe1KOZWhpq1DPJgU23DSD9T0xSXreCzJ8U8u%2BHI6eyy2%2FVeuucVCVafwJXwT%2FErSPffLINj8ELcl9eDQ38QKjEuoEBlrlnKvLPyjkRgT1U%2Fhly7HN6Zu%2FzMwd5%2FjYxTCPwLEvyQtspbKkmRF0t93ByAHRHzuL4oYFppGFP8%2BbxraiforhQIp2rt1R0j0Ht5xFjRNOr7sHJHVx1GhTGBwrtx20R%2BrU2QkJYlCR8rLfNWwjWJXBlE9yGP5E5VZrmejW%2FYCNQcAmAJ33iQ%3Bi6NHip6QWoewZ88H5lMJ7npxpTGMkNMw7g5OEl3w4Gayv%2BYPGG70qx4IMgt9eVHvXmGbiPna2A679a%2Beis06X0GFMpHOKqx9%2F9AwQ%2B6xpmT9uVwmzm8FOWo%2FE3edBV8rMU8MmrdtrdA%2FBkDzqpnZ6ojf6GaTqNGu5uPtjKousK0lWEgV3IDBQVEqDJaz0sPhQiOkCW4K40EzD6CJ857%2FMZvaatohRUjVFPzoMUGGmc1t4lIp%2F2kpGCX7Or8Xgd67oPlxEQcL5LAge1JUrky1cVbyIc%2FXtxS29E5PMmWxFBX%2Bu3WNEDML7ewsIGOqUB5e3uZ%2F9N79jWYsm7ouzLAAJTykJUoHeqbwsGovEm9ZxUlIeQ8Uf97%2FbJxw0XSgkw6Jd%2BWw7PpRBiNXKnpazwNwrj%2FoqnKgeBf67R0KXzzcVFB38cdRL7rsH9S7MRqpXWrBBF4HbwF9fIH5IyQQ2ptw5QyWoiF22hUYEd%2FBvz0SznYNo9953u6RTLIrGTfXBEXdi9OstuwG5rC7XoSeHyEsdY0g2A&X-Amz-Signature=38a5932939a2aebd3e07ca280ed17a26afd830adead793e180feb8b77af66f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Toronto Blue Jays $100 Ticket Giveaway!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#004c97", "#e03c31", "#f5f5f5"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-310",
    "repoUrl": "https://github.com/arslvn93/Giveaway-310",
    "tag": "Toronto Blue Jays 2025",
    "netlifyUrl": "http://Giveaway-310.netlify.app",
    "netlifyId": "1003324053"
  }
};