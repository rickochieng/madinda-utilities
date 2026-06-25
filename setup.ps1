$folders = @(
    "app\(marketing)",
    "app\(marketing)\about",
    "app\(marketing)\solutions",
    "app\(marketing)\industries",
    "app\(marketing)\platform",
    "app\(marketing)\dashboard-demo",
    "app\(marketing)\pilot-project",
    "app\(marketing)\resources",
    "app\(marketing)\media-news",
    "app\(marketing)\csr-impact",
    "app\(marketing)\careers",
    "app\(marketing)\support",
    "app\(marketing)\contact",

    "app\api\contact",
    "app\api\pilot-project",
    "app\api\newsletter",
    "app\api\careers",

    "components\layout\navbar",
    "components\layout\footer",
    "components\layout\mega-menu",
    "components\layout\mobile-menu",
    "components\layout\top-bar",

    "components\sections\hero",
    "components\sections\trust-metrics",
    "components\sections\ecosystem",
    "components\sections\solutions",
    "components\sections\industries",
    "components\sections\dashboard-preview",
    "components\sections\testimonials",
    "components\sections\faq",
    "components\sections\cta",

    "components\cards",

    "components\dashboard\widgets",
    "components\dashboard\charts",
    "components\dashboard\maps",
    "components\dashboard\tables",
    "components\dashboard\alerts",

    "components\forms",
    "components\ui\shadcn",
    "components\shared",

    "config",
    "data",
    "hooks",
    "lib",

    "services\crm",
    "services\erp",
    "services\ami",
    "services\gis",
    "services\billing",
    "services\analytics",

    "store",
    "types",

    "public\images",
    "public\icons",
    "public\logos",
    "public\illustrations",

    "styles"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

$files = @(
    "app\layout.tsx",
    "app\loading.tsx",
    "app\error.tsx",
    "app\not-found.tsx",
    "app\sitemap.ts",
    "app\robots.ts",

    "app\(marketing)\page.tsx",

    "app\(marketing)\about\page.tsx",
    "app\(marketing)\solutions\page.tsx",
    "app\(marketing)\industries\page.tsx",
    "app\(marketing)\platform\page.tsx",
    "app\(marketing)\dashboard-demo\page.tsx",
    "app\(marketing)\pilot-project\page.tsx",
    "app\(marketing)\resources\page.tsx",
    "app\(marketing)\media-news\page.tsx",
    "app\(marketing)\csr-impact\page.tsx",
    "app\(marketing)\careers\page.tsx",
    "app\(marketing)\support\page.tsx",
    "app\(marketing)\contact\page.tsx",

    "components\cards\solution-card.tsx",
    "components\cards\industry-card.tsx",
    "components\cards\metric-card.tsx",
    "components\cards\case-study-card.tsx",
    "components\cards\news-card.tsx",

    "components\forms\contact-form.tsx",
    "components\forms\pilot-form.tsx",
    "components\forms\newsletter-form.tsx",
    "components\forms\career-form.tsx",

    "components\shared\section-header.tsx",
    "components\shared\container.tsx",
    "components\shared\page-header.tsx",
    "components\shared\animated-counter.tsx",

    "config\site.ts",
    "config\navigation.ts",
    "config\seo.ts",
    "config\dashboard.ts",

    "data\industries.ts",
    "data\solutions.ts",
    "data\testimonials.ts",
    "data\metrics.ts",
    "data\faq.ts",
    "data\news.ts",
    "data\resources.ts",

    "hooks\use-scroll.ts",
    "hooks\use-mobile.ts",
    "hooks\use-theme.ts",
    "hooks\use-dashboard.ts",

    "lib\utils.ts",
    "lib\validations.ts",
    "lib\analytics.ts",
    "lib\schema.ts",
    "lib\api-client.ts",
    "lib\constants.ts",

    "store\ui-store.ts",
    "store\dashboard-store.ts",
    "store\form-store.ts",

    "types\solution.ts",
    "types\industry.ts",
    "types\dashboard.ts",
    "types\api.ts",
    "types\forms.ts",

    "styles\globals.css",
    "styles\animations.css",

    "middleware.ts",
    "next.config.ts",
    "tailwind.config.ts"
)

foreach ($file in $files) {
    if (!(Test-Path $file)) {
        New-Item -ItemType File -Path $file -Force | Out-Null
    }
}

Write-Host ""
Write-Host "===================================" -ForegroundColor Green
Write-Host "Madinda Utilities structure created!" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Green
Write-Host ""