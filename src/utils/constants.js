import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export const navLinks = [
  {
    name: "Products",
    path: "#products",
    subItems: [
      {
        name: "Electronics",
        path: "#electronics",
        subItems: [
          {
            name: "Phones",
            path: "#phones",
            subItems: [
              {
                name: "Android",
                path: "#android",
                subItems: [
                  { name: "Samsung", path: "#samsung" },
                  { name: "Google Pixel", path: "#google-pixel" },
                  { name: "OnePlus", path: "#oneplus" },
                  { name: "Xiaomi", path: "#xiaomi" },
                  { name: "Motorola", path: "#motorola" },
                ],
              },
              {
                name: "iOS",
                path: "#ios",
                subItems: [
                  { name: "iPhone 15", path: "#iphone-15" },
                  { name: "iPhone 14", path: "#iphone-14" },
                  { name: "iPhone SE", path: "#iphone-se" },
                  { name: "iPhone 13", path: "#iphone-13" },
                  { name: "iPhone 12", path: "#iphone-12" },
                ],
              },
              {
                name: "Feature Phones",
                path: "#feature-phones",
                subItems: [
                  { name: "Nokia", path: "#nokia-feature" },
                  { name: "Samsung", path: "#samsung-feature" },
                  { name: "KaiOS", path: "#kaios" },
                  { name: "Basic", path: "#basic-phones" },
                  { name: "Flip Phones", path: "#flip-phones" },
                ],
              },
              {
                name: "Gaming Phones",
                path: "#gaming-phones",
                subItems: [
                  { name: "ASUS ROG", path: "#asus-rog" },
                  { name: "Black Shark", path: "#black-shark" },
                  { name: "Nubia RedMagic", path: "#redmagic" },
                  { name: "Lenovo Legion", path: "#lenovo-legion" },
                  { name: "Razer Phone", path: "#razer-phone" },
                ],
              },
              {
                name: "Foldable Phones",
                path: "#foldable-phones",
                subItems: [
                  { name: "Samsung Galaxy Z Fold", path: "#galaxy-z-fold" },
                  { name: "Samsung Galaxy Z Flip", path: "#galaxy-z-flip" },
                  { name: "Google Pixel Fold", path: "#pixel-fold" },
                  { name: "Huawei Mate X", path: "#huawei-mate-x" },
                  { name: "Oppo Find N", path: "#oppo-find-n" },
                ],
              },
            ],
          },
          {
            name: "Laptops",
            path: "#laptops",
            subItems: [
              {
                name: "Windows",
                path: "#windows-laptops",
                subItems: [
                  { name: "Dell", path: "#dell-laptops" },
                  { name: "HP", path: "#hp-laptops" },
                  { name: "Lenovo", path: "#lenovo-laptops" },
                  { name: "ASUS", path: "#asus-laptops" },
                  { name: "Acer", path: "#acer-laptops" },
                ],
              },
              {
                name: "macOS",
                path: "#macos-laptops",
                subItems: [
                  { name: "MacBook Air", path: "#macbook-air" },
                  { name: "MacBook Pro 13", path: "#macbook-pro-13" },
                  { name: "MacBook Pro 14", path: "#macbook-pro-14" },
                  { name: "MacBook Pro 16", path: "#macbook-pro-16" },
                  { name: "iMac", path: "#imac" },
                ],
              },
              {
                name: "Chromebooks",
                path: "#chromebooks",
                subItems: [
                  { name: "Google Pixelbook", path: "#pixelbook" },
                  { name: "Lenovo Chromebook", path: "#lenovo-chromebook" },
                  { name: "HP Chromebook", path: "#hp-chromebook" },
                  { name: "Acer Chromebook", path: "#acer-chromebook" },
                  { name: "Samsung Chromebook", path: "#samsung-chromebook" },
                ],
              },
              {
                name: "Gaming Laptops",
                path: "#gaming-laptops",
                subItems: [
                  { name: "Alienware", path: "#alienware" },
                  { name: "MSI", path: "#msi-gaming" },
                  { name: "Razer Blade", path: "#razer-blade" },
                  { name: "ASUS ROG", path: "#asus-rog-laptop" },
                  { name: "Acer Predator", path: "#acer-predator" },
                ],
              },
              {
                name: "2-in-1 Laptops",
                path: "#2-in-1-laptops",
                subItems: [
                  { name: "Microsoft Surface", path: "#microsoft-surface" },
                  { name: "HP Spectre x360", path: "#hp-spectre" },
                  { name: "Lenovo Yoga", path: "#lenovo-yoga" },
                  { name: "Dell XPS 2-in-1", path: "#dell-xps-2-in-1" },
                  { name: "ASUS Zenbook Flip", path: "#asus-zenbook-flip" },
                ],
              },
            ],
          },
          {
            name: "Tablets",
            path: "#tablets",
            subItems: [
              {
                name: "Android Tablets",
                path: "#android-tablets",
                subItems: [
                  { name: "Samsung Galaxy Tab", path: "#galaxy-tab" },
                  { name: "Lenovo Tab", path: "#lenovo-tab" },
                  { name: "Xiaomi Pad", path: "#xiaomi-pad" },
                  { name: "Amazon Fire Tablet", path: "#fire-tablet" },
                  { name: "Oppo Pad", path: "#oppo-pad" },
                ],
              },
              {
                name: "iPads",
                path: "#ipads",
                subItems: [
                  { name: "iPad Pro", path: "#ipad-pro" },
                  { name: "iPad Air", path: "#ipad-air" },
                  { name: "iPad", path: "#ipad-base" },
                  { name: "iPad Mini", path: "#ipad-mini" },
                  { name: "Refurbished iPads", path: "#refurbished-ipads" },
                ],
              },
              {
                name: "Windows Tablets",
                path: "#windows-tablets",
                subItems: [
                  { name: "Microsoft Surface Pro", path: "#surface-pro" },
                  {
                    name: "Dell Latitude Tablet",
                    path: "#dell-latitude-tablet",
                  },
                  { name: "HP Elite x2", path: "#hp-elite-x2" },
                  { name: "Lenovo ThinkPad Tablet", path: "#thinkpad-tablet" },
                  { name: "ASUS Transformer", path: "#asus-transformer" },
                ],
              },
              {
                name: "Drawing Tablets",
                path: "#drawing-tablets",
                subItems: [
                  { name: "Wacom Cintiq", path: "#wacom-cintiq" },
                  { name: "Wacom Intuos", path: "#wacom-intuos" },
                  { name: "Huion Kamvas", path: "#huion-kamvas" },
                  { name: "XP-Pen Artist", path: "#xp-pen-artist" },
                  { name: "Samsung S Pen Tablets", path: "#s-pen-tablets" },
                ],
              },
              {
                name: "Kids Tablets",
                path: "#kids-tablets",
                subItems: [
                  { name: "Amazon Fire Kids", path: "#fire-kids" },
                  { name: "LeapFrog LeapPad", path: "#leappad" },
                  { name: "Samsung Kids Tab", path: "#samsung-kids-tab" },
                  { name: "Kurio Tablet", path: "#kurio-tablet" },
                  { name: "Osmo Tablet", path: "#osmo-tablet" },
                ],
              },
            ],
          },
          {
            name: "Wearables",
            path: "#wearables",
            subItems: [
              {
                name: "Smartwatches",
                path: "#smartwatches",
                subItems: [
                  { name: "Apple Watch", path: "#apple-watch" },
                  { name: "Samsung Galaxy Watch", path: "#galaxy-watch" },
                  { name: "Google Pixel Watch", path: "#pixel-watch" },
                  { name: "Fitbit", path: "#fitbit-watch" },
                  { name: "Garmin", path: "#garmin-watch" },
                ],
              },
              {
                name: "Fitness Trackers",
                path: "#fitness-trackers",
                subItems: [
                  { name: "Fitbit Bands", path: "#fitbit-bands" },
                  { name: "Xiaomi Mi Band", path: "#mi-band" },
                  { name: "Garmin Trackers", path: "#garmin-trackers" },
                  { name: "Samsung Galaxy Fit", path: "#galaxy-fit" },
                  { name: "Huawei Band", path: "#huawei-band" },
                ],
              },
              {
                name: "Wireless Earbuds",
                path: "#wireless-earbuds",
                subItems: [
                  { name: "Apple AirPods", path: "#airpods" },
                  { name: "Samsung Galaxy Buds", path: "#galaxy-buds" },
                  { name: "Sony WF Series", path: "#sony-wf" },
                  {
                    name: "Bose QuietComfort Earbuds",
                    path: "#bose-qc-earbuds",
                  },
                  {
                    name: "Sennheiser Momentum True Wireless",
                    path: "#sennheiser-momentum",
                  },
                ],
              },
              {
                name: "VR Headsets",
                path: "#vr-headsets",
                subItems: [
                  { name: "Meta Quest", path: "#meta-quest" },
                  { name: "PlayStation VR", path: "#playstation-vr" },
                  { name: "HTC Vive", path: "#htc-vive" },
                  { name: "Valve Index", path: "#valve-index" },
                  { name: "HP Reverb G2", path: "#hp-reverb-g2" },
                ],
              },
              {
                name: "Smart Glasses",
                path: "#smart-glasses",
                subItems: [
                  { name: "Ray-Ban Stories", path: "#ray-ban-stories" },
                  { name: "Amazon Echo Frames", path: "#echo-frames" },
                  { name: "Google Glass", path: "#google-glass" },
                  { name: "Vuzix Blade", path: "#vuzix-blade" },
                  { name: "North Focals", path: "#north-focals" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Home Appliances",
        path: "#home-appliances",
        subItems: [
          {
            name: "Kitchen Appliances",
            path: "#kitchen-appliances",
            subItems: [
              { name: "Refrigerators", path: "#refrigerators" },
              { name: "Ovens & Cooktops", path: "#ovens-cooktops" },
              { name: "Microwaves", path: "#microwaves" },
              { name: "Dishwashers", path: "#dishwashers" },
              { name: "Coffee Makers", path: "#coffee-makers" },
            ],
          },
          {
            name: "Laundry Appliances",
            path: "#laundry-appliances",
            subItems: [
              { name: "Washing Machines", path: "#washing-machines" },
              { name: "Dryers", path: "#dryers" },
              { name: "Washer-Dryer Combos", path: "#washer-dryer-combos" },
              { name: "Ironing Boards", path: "#ironing-boards" },
              { name: "Irons", path: "#irons" },
            ],
          },
          {
            name: "Cleaning Appliances",
            path: "#cleaning-appliances",
            subItems: [
              { name: "Vacuum Cleaners", path: "#vacuum-cleaners" },
              { name: "Robot Vacuums", path: "#robot-vacuums" },
              { name: "Steam Mops", path: "#steam-mops" },
              { name: "Air Purifiers", path: "#air-purifiers" },
              { name: "Humidifiers", path: "#humidifiers" },
            ],
          },
          {
            name: "Small Appliances",
            path: "#small-appliances",
            subItems: [
              { name: "Blenders", path: "#blenders" },
              { name: "Toasters", path: "#toasters" },
              { name: "Kettles", path: "#kettles" },
              { name: "Food Processors", path: "#food-processors" },
              { name: "Slow Cookers", path: "#slow-cookers" },
            ],
          },
          {
            name: "Smart Home",
            path: "#smart-home",
            subItems: [
              { name: "Smart Speakers", path: "#smart-speakers" },
              { name: "Smart Displays", path: "#smart-displays" },
              { name: "Smart Lighting", path: "#smart-lighting" },
              { name: "Smart Thermostats", path: "#smart-thermostats" },
              { name: "Smart Locks", path: "#smart-locks" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Technology",
    path: "#technology",
    subItems: [
      {
        name: "Artificial Intelligence",
        path: "#artificial-intelligence",
        subItems: [
          {
            name: "Machine Learning",
            path: "#machine-learning",
            subItems: [
              { name: "Supervised Learning", path: "#supervised-learning" },
              { name: "Unsupervised Learning", path: "#unsupervised-learning" },
              {
                name: "Reinforcement Learning",
                path: "#reinforcement-learning",
              },
              { name: "Deep Learning", path: "#deep-learning" },
              { name: "Natural Language Processing", path: "#nlp-ml" },
            ],
          },
          {
            name: "Computer Vision",
            path: "#computer-vision",
            subItems: [
              { name: "Image Recognition", path: "#image-recognition" },
              { name: "Object Detection", path: "#object-detection" },
              { name: "Image Segmentation", path: "#image-segmentation" },
              { name: "Video Analysis", path: "#video-analysis" },
              { name: "Facial Recognition", path: "#facial-recognition" },
            ],
          },
          {
            name: "Robotics",
            path: "#robotics",
            subItems: [
              { name: "Industrial Robots", path: "#industrial-robots" },
              { name: "Service Robots", path: "#service-robots" },
              { name: "Mobile Robots", path: "#mobile-robots" },
              { name: "Humanoid Robots", path: "#humanoid-robots" },
              { name: "Autonomous Vehicles", path: "#autonomous-vehicles" },
            ],
          },
          {
            name: "Natural Language Processing",
            path: "#natural-language-processing",
            subItems: [
              { name: "Text Analysis", path: "#text-analysis" },
              { name: "Sentiment Analysis", path: "#sentiment-analysis" },
              { name: "Machine Translation", path: "#machine-translation" },
              { name: "Chatbots", path: "#chatbots" },
              { name: "Speech Recognition", path: "#speech-recognition" },
            ],
          },
          {
            name: "AI Ethics",
            path: "#ai-ethics",
            subItems: [
              { name: "Bias in AI", path: "#bias-in-ai" },
              { name: "AI Transparency", path: "#ai-transparency" },
              { name: "AI Accountability", path: "#ai-accountability" },
              { name: "AI Safety", path: "#ai-safety" },
              { name: "Responsible AI", path: "#responsible-ai" },
            ],
          },
        ],
      },
      {
        name: "Web Development",
        path: "#web-development",
        subItems: [
          {
            name: "Frontend",
            path: "#frontend-development",
            subItems: [
              { name: "React", path: "#react" },
              { name: "Angular", path: "#angular" },
              { name: "Vue.js", path: "#vue-js" },
              { name: "Svelte", path: "#svelte" },
              { name: "Ember.js", path: "#ember-js" },
            ],
          },
          {
            name: "Backend",
            path: "#backend-development",
            subItems: [
              { name: "Node.js", path: "#node-js" },
              { name: "Python", path: "#python-backend" },
              { name: "Java", path: "#java-backend" },
              { name: "Ruby on Rails", path: "#ruby-on-rails" },
              { name: "PHP", path: "#php-backend" },
            ],
          },
          {
            name: "Databases",
            path: "#databases",
            subItems: [
              { name: "MySQL", path: "#mysql" },
              { name: "PostgreSQL", path: "#postgresql" },
              { name: "MongoDB", path: "#mongodb" },
              { name: "Firebase", path: "#firebase-db" },
              { name: "SQLite", path: "#sqlite" },
            ],
          },
          {
            name: "DevOps",
            path: "#devops",
            subItems: [
              { name: "Docker", path: "#docker" },
              { name: "Kubernetes", path: "#kubernetes" },
              { name: "AWS", path: "#aws-devops" },
              { name: "Azure", path: "#azure-devops" },
              { name: "Google Cloud", path: "#google-cloud-devops" },
            ],
          },
          {
            name: "Testing",
            path: "#testing",
            subItems: [
              { name: "Unit Testing", path: "#unit-testing" },
              { name: "Integration Testing", path: "#integration-testing" },
              { name: "End-to-End Testing", path: "#e2e-testing" },
              { name: "Performance Testing", path: "#performance-testing" },
              { name: "Accessibility Testing", path: "#accessibility-testing" },
            ],
          },
        ],
      },
      {
        name: "Mobile Development",
        path: "#mobile-development",
        subItems: [
          {
            name: "Android Development",
            path: "#android-dev",
            subItems: [
              { name: "Kotlin", path: "#kotlin-android" },
              { name: "Java", path: "#java-android" },
              { name: "Jetpack Compose", path: "#jetpack-compose" },
              { name: "Android Studio", path: "#android-studio" },
              { name: "Firebase for Android", path: "#firebase-android" },
            ],
          },
          {
            name: "iOS Development",
            path: "#ios-dev",
            subItems: [
              { name: "Swift", path: "#swift-ios" },
              { name: "Objective-C", path: "#objective-c-ios" },
              { name: "SwiftUI", path: "#swift-ui" },
              { name: "Xcode", path: "#xcode" },
              { name: "Firebase for iOS", path: "#firebase-ios" },
            ],
          },
          {
            name: "Cross-Platform",
            path: "#cross-platform-dev",
            subItems: [
              { name: "React Native", path: "#react-native" },
              { name: "Flutter", path: "#flutter" },
              { name: "Xamarin", path: "#xamarin" },
              { name: "Ionic", path: "#ionic" },
              { name: "NativeScript", path: "#nativescript" },
            ],
          },
          {
            name: "Mobile Testing",
            path: "#mobile-testing",
            subItems: [
              { name: "Espresso", path: "#espresso-testing" },
              { name: "XCUITest", path: "#xcuitest" },
              { name: "Appium", path: "#appium" },
              { name: "Firebase Test Lab", path: "#firebase-test-lab" },
              { name: "Sauce Labs", path: "#sauce-labs-mobile" },
            ],
          },
          {
            name: "Mobile Design",
            path: "#mobile-design",
            subItems: [
              { name: "UI/UX Principles", path: "#mobile-ui-ux" },
              { name: "Figma for Mobile", path: "#figma-mobile" },
              { name: "Sketch for Mobile", path: "#sketch-mobile" },
              { name: "Prototyping Tools", path: "#mobile-prototyping" },
              {
                name: "Accessibility in Mobile",
                path: "#mobile-accessibility",
              },
            ],
          },
        ],
      },
      {
        name: "Data Science",
        path: "#data-science",
        subItems: [
          {
            name: "Data Analysis",
            path: "#data-analysis",
            subItems: [
              {
                name: "Python for Data Analysis",
                path: "#python-data-analysis",
              },
              { name: "R for Data Analysis", path: "#r-data-analysis" },
              { name: "Pandas", path: "#pandas" },
              { name: "NumPy", path: "#numpy" },
              { name: "SQL for Data Analysis", path: "#sql-data-analysis" },
            ],
          },
          {
            name: "Data Visualization",
            path: "#data-visualization",
            subItems: [
              { name: "Matplotlib", path: "#matplotlib" },
              { name: "Seaborn", path: "#seaborn" },
              { name: "Tableau", path: "#tableau" },
              { name: "Power BI", path: "#power-bi" },
              { name: "D3.js", path: "#d3-js" },
            ],
          },
          {
            name: "Big Data",
            path: "#big-data",
            subItems: [
              { name: "Hadoop", path: "#hadoop" },
              { name: "Spark", path: "#spark" },
              { name: "Kafka", path: "#kafka" },
              { name: "AWS Big Data", path: "#aws-big-data" },
              { name: "Google Cloud Big Data", path: "#google-cloud-big-data" },
            ],
          },
          {
            name: "Statistical Modeling",
            path: "#statistical-modeling",
            subItems: [
              { name: "Regression Analysis", path: "#regression-analysis" },
              { name: "Time Series Analysis", path: "#time-series" },
              { name: "Hypothesis Testing", path: "#hypothesis-testing" },
              { name: "Bayesian Methods", path: "#bayesian-methods" },
              { name: "Causal Inference", path: "#causal-inference" },
            ],
          },
          {
            name: "Data Engineering",
            path: "#data-engineering",
            subItems: [
              { name: "ETL Processes", path: "#etl-processes" },
              { name: "Data Warehousing", path: "#data-warehousing" },
              { name: "Data Lakes", path: "#data-lakes" },
              {
                name: "Cloud Data Engineering",
                path: "#cloud-data-engineering",
              },
              { name: "Data Governance", path: "#data-governance" },
            ],
          },
        ],
      },
      {
        name: "Cybersecurity",
        path: "#cybersecurity",
        subItems: [
          {
            name: "Network Security",
            path: "#network-security",
            subItems: [
              { name: "Firewalls", path: "#firewalls" },
              { name: "Intrusion Detection", path: "#intrusion-detection" },
              { name: "VPNs", path: "#vpns" },
              { name: "Network Monitoring", path: "#network-monitoring" },
              { name: "Network Protocols", path: "#network-protocols" },
            ],
          },
        ],
      },
    ],
  },
  { name: "Learn", path: "#learn" },
  { name: "Support", path: "#support" },
  {
    name: "About Us",
    path: "#about",
    subItems: [
      {
        name: "company",
        path: "#company",
        subItems: [
          { name: "Our Story", path: "#story" },
          { name: "Team", path: "#team" },
          { name: "Careers", path: "#careers" },
        ],
      },
    ],
  },
];

export const socialIcons = [
  { name: "Facebook", icon: FaFacebook, link: "#" },
  { name: "Twitter", icon: FaXTwitter, link: "#" },
  { name: "Instagram", icon: FaInstagram, link: "#" },
  { name: "LinkedIn", icon: FaLinkedin, link: "#" },
  { name: "Youtube", icon: FaYoutube, link: "#" },
];

export const sampleResults = [
  {
    title: "Welcome To CodeEaseX",
    description: "",
    source: "MERN-LAUNCHER",
  },
  {
    title: "Powered By CodeEaseX 🚀",
    description:
      "Setting up a full-stack project from scratch can be time-consuming...",
    source: "MERN-LAUNCHER",
  },
  {
    title: "Powered By CodeEaseX 🚀",
    description:
      "Every web developer knows this pain—you’re excited to build...",
    source: "MERN-LAUNCHER",
  },
];
