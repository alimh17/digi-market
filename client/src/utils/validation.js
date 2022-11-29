import * as Yup from 'yup'

export const mobileSchema = Yup.object({
    name: Yup.string().required("نام موبایل الزامی میباشد").min(4, "نام موبایل نباید کمتر از 4 کاراکتر باشد").max(255, "نام موبایل نباید بیشتر از 255 کاراکتر باشد").trim(),
    price: Yup.string().required("قیمت موبایل الزامی میباشد").matches(/^\d+$/, "قیمت موبایل باید شامل اعداد باشد").min(4, "قیمت موبایل نباید کمتر از 4 کاراکتر باشد").max(9, "قیمت موبایل نباید بیشتر از  9 کاراکتر باشد").trim(),
    screen: Yup.string().required("اندازه صفحه موبایل الزامی میباشد").min(4, "اندازه صفحه موبایل نباید کمتر از 4 کاراکتر باشد").max(60, "اندازه صفحه موبایل نباید بیشتر ا 16 کاراکتر باشد"),
    brand: Yup.string().required("برند موبایل الزامی میباشد"),
    image: Yup.mixed().required("تصاویر موبایل الزامی میباشند"),
    mainImage: Yup.mixed().required("تصویر اصلی موبایل الزامی میباشد"),
    network: Yup.string().required("شبکه الزامی  میباشد").max(60, "شبکه نمیتواند بیشتر از60 کاراکتر باشد"),
    ram: Yup.string().required("رم الزامی می باشد").max(60, "رم نمیتواند بیشتر از 60 کاراکتر باشد"),
    dimensions: Yup.string().required("ابعاد موبایل الزامی میباشد").max(60, "ابعاد موبایل نباید بیشتر از 60 کاراکتر باشد"),
    weight: Yup.string().required("وزن موبایل الزامی میباشد").max(60, "وزن موبایل نباید بیشتر از 60 کاراکتر باشد"),
    simcart: Yup.string().required("سیمکارت موبایل الزامی میباشد").min(4, "سیمکارت موبایل نمیتواند کمتر از 4 کاراکتر باشد").max(60, "سیمکارت موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    color: Yup.array().required("رنگ موبایل الزامی میباشد"),
    body: Yup.string().min(4, "اطلاعات بدنه نمیتواند کمتر از 8 کاراکتر باشد").max(500, "اطلاعات بدنه نمیتواند بیشتر از 500 کاراکتر باشد"),
    features: Yup.string().min(4, "ویژگی های خاص موبایل نمیتواند کمتر از 8 کاراکتر باشد").max(500, "ویژگی های خاص موبایل نمیتواند بیشتر از 500 کاراکتر باشد")
})


export const lapTopSchema = Yup.object({
    name: Yup.string().required("نام لپ تاپ الزامی میباشد").min(4, "نام لپ تاپ نباید کمتر از 4 کاراکتر باشد").max(255, "نام لپ تاپ نباید بیشتر از 255 کاراکتر باشد").trim(),
    price: Yup.string().required("قیمت لپ تاپ الزامی میباشد").matches(/^\d+$/, "قیمت لپ تاپ باید شامل اعداد باشد").min(4, "قیمت لپ تاپ نباید کمتر از 4 کاراکتر باشد").max(9, "قیمت لپ تاپ نباید بیشتر از  9 کاراکتر باشد").trim(),
    screen: Yup.string().required("اندازه صفحه لپ تاپ الزامی میباشد").min(4, "اندازه صفحه لپ تاپ نباید کمتر از 4 کاراکتر باشد").max(60, "اندازه صفحه لپ تاپ نباید بیشتر ا 16 کاراکتر باشد"),
    brand: Yup.string().required("برند لپ تاپ الزامی میباشد"),
    image: Yup.mixed().required("تصاویر لپ تاپ الزامی میباشند"),
    mainImage: Yup.mixed().required("تصویر اصلی لپ تاپ الزامی میباشد"),
    cpu_series: Yup.string().required("سری پردازنده الزامی  میباشد").max(60, "سری پردازنده نمیتواند بیشتر از60 کاراکتر باشد"),
    ram: Yup.string().required("ظرفیت حافظه RAM الزامی می باشد").max(60, "ظرفیت حافظه RAM نمیتواند بیشتر از 60 کاراکتر باشد"),
    ram_type: Yup.string().required("نوع حافظه RAM الزامی میباشد"),
    gpu_maker: Yup.string().required("سازنده پردازنده گرافیکی الزامی  میباشد").max(60, "سازنده پردازنده گرافیکی نمیتواند بیشتر از60 کاراکتر باشد"),
    cpu_maker: Yup.string().required("سازنده پردازنده الزامی  میباشد").max(60, "سازنده پردازنده نمیتواند بیشتر از60 کاراکتر باشد"),
    cpu_model: Yup.string().required("مدل پردازنده الزامی  میباشد").max(60, "مدل پردازنده نمیتواند بیشتر از60 کاراکتر باشد"),
    dimensions: Yup.string().required("ابعاد لپ تاپ الزامی میباشد").max(60, "ابعاد لپ تاپ نباید بیشتر از 60 کاراکتر باشد"),
    weight: Yup.string().required("وزن لپ تاپ الزامی میباشد").max(60, "وزن لپ تاپ نباید بیشتر از 60 کاراکتر باشد"),
    color: Yup.array().required("رنگ لپ تاپ الزامی میباشد"),
    detail: Yup.string().min(4, "جزئیات لپ تاپ نمیتواند کمتر از 4 کاراکتر باشد").max(700, "اطلاعات بدنه نمیتواند بیشتر از 700 کاراکتر باشد"),

})

export const tabletSchema = Yup.object({
    name: Yup.string().required("نام تبلت الزامی میباشد").min(4, "نام تبلت نباید کمتر از 4 کاراکتر باشد").max(255, "نام تبلت نباید بیشتر از 255 کاراکتر باشد").trim(),
    price: Yup.string().required("قیمت تبلت الزامی میباشد").matches(/^\d+$/, "قیمت تبلت باید شامل اعداد باشد").min(4, "قیمت تبلت نباید کمتر از 4 کاراکتر باشد").max(9, "قیمت تبلت نباید بیشتر از  9 کاراکتر باشد").trim(),
    brand: Yup.string().required("برند تبلت الزامی میباشد"),
    image: Yup.mixed().required("تصاویر تبلت الزامی میباشند"),
    mainImage: Yup.mixed().required("تصویر اصلی تبلت الزامی میباشد"),
    network: Yup.string().required("شبکه الزامی  میباشد").max(60, "شبکه نمیتواند بیشتر از60 کاراکتر باشد"),
    ram: Yup.string().required("رم الزامی می باشد").max(60, "رم نمیتواند بیشتر از 60 کاراکتر باشد"),
    internal_ram: Yup.string().required("حافظه داخلی تبلت الزامی میباشد").max(60, "حافظه داخلی تبلت نباید بیشتر از 60 کاراکتر باشد"),
    weight: Yup.string().required("وزن تبلت الزامی میباشد").max(60, "وزن تبلت نباید بیشتر از 60 کاراکتر باشد"),
    simcart: Yup.string().required("سیمکارت تبلت الزامی میباشد").min(4, "سیمکارت تبلت نمیتواند کمتر از 4 کاراکتر باشد").max(60, "سیمکارت تبلت نمیتواند بیشتر از 60 کاراکتر باشد"),
    color: Yup.array().required("رنگ تبلت الزامی میباشد"),
    body: Yup.string().min(4, "اطلاعات بدنه نمیتواند کمتر از 4 کاراکتر باشد").max(500, "اطلاعات بدنه نمیتواند بیشتر از 500 کاراکتر باشد"),
    detail: Yup.string().min(4, "جزئیات تبلت نمیتواند کمتر از 4 کاراکتر باشد").max(700, "جزئیات تبلت نمیتواند بیشتر از 700 کاراکتر باشد")
})
export const consoleSchema = Yup.object({
    name: Yup.string().required("نام کنسول بازی الزامی میباشد").min(4, "نام کنسول بازی نباید کمتر از 4 کاراکتر باشد").max(255, "نام کنسول بازی نباید بیشتر از 255 کاراکتر باشد").trim(),
    price: Yup.string().required("قیمت کنسول بازی الزامی میباشد").matches(/^\d+$/, "قیمت کنسول بازی باید شامل اعداد باشد").min(4, "قیمت کنسول بازی نباید کمتر از 4 کاراکتر باشد").max(9, "قیمت کنسول بازی نباید بیشتر از  9 کاراکتر باشد").trim(),
    connection: Yup.string().required("فناوری ارتباطی کنسول بازی الزامی میباشد").min(2, "فناوری ارتباطی کنسول بازی نباید کمتر از 2 کاراکتر باشد").max(60, "فناوری ارتباطی کنسول بازی نباید بیشتر ا 16 کاراکتر باشد"),
    image: Yup.mixed().required("تصاویر کنسول بازی الزامی میباشند"),
    mainImage: Yup.mixed().required("تصویر اصلی کنسول بازی الزامی میباشد"),
    ram: Yup.string().required("حافظه کنسول بازی الزامی می باشد").max(60, "حافظه کنسول بازی نمیتواند بیشتر از 60 کاراکتر باشد"),
    ram_space: Yup.string().required("ظرفیت هارد دیسک الزامی میباشد").max(60, "ظرفیت هارد دیسک نباید بیشتر از 60 کاراکتر باشد"),
    joyStick: Yup.string().required("تعداد دسته الزامی میباشد").max(60, "تعداد دسته نباید بیشتر از 60 کاراکتر باشد"),
    dimensions: Yup.string().required("ابعاد کنسول بازی الزامی میباشد").max(60, "ابعاد کنسول بازی نباید بیشتر از 60 کاراکتر باشد"),
    detail: Yup.string().min(4, "جزئیات کنسول بازی نمیتواند کمتر از 4 کاراکتر باشد").max(700, "جزئیات کنسول بازی نمیتواند بیشتر از 700 کاراکتر باشد")
})

export const smartWatchSchema = Yup.object({
    name: Yup.string().required("نام ساعت هوشمند الزامی میباشد").min(4, "نام ساعت هوشمند نباید کمتر از 4 کاراکتر باشد").max(255, "نام ساعت هوشمند نباید بیشتر از 255 کاراکتر باشد").trim(),
    price: Yup.string().required("قیمت ساعت هوشمند الزامی میباشد").matches(/^\d+$/, "قیمت ساعت هوشمند باید شامل اعداد باشد").min(4, "قیمت ساعت هوشمند نباید کمتر از 4 کاراکتر باشد").max(9, "قیمت ساعت هوشمند نباید بیشتر از  9 کاراکتر باشد").trim(),
    brand: Yup.string().required("برند ساعت هوشمند الزامی میباشد"),
    image: Yup.mixed().required("تصاویر ساعت هوشمند الزامی میباشند"),
    mainImage: Yup.mixed().required("تصویر اصلی ساعت هوشمند الزامی میباشد"),
    screenForm: Yup.string().required("فرم صفحه الزامی  میباشد").max(60, "فرم صفحه نمیتواند بیشتر از60 کاراکتر باشد"),
    weight: Yup.string().required("وزن ساعت هوشمند الزامی میباشد").max(60, "وزن ساعت هوشمند نباید بیشتر از 60 کاراکتر باشد"),
    FrameComposition: Yup.string().required("ابعاد قاب الزامی می باشد").max(60, "ابعاد قاب نمیتواند بیشتر از 60 کاراکتر باشد"),
    Application: Yup.string().required("کاربرد ساعت هوشمند الزامی میباشد").max(60, "کاربرد ساعت هوشمند نباید بیشتر از 60 کاراکتر باشد"),
    strapMaterial: Yup.string().required("جنس بند ساعت هوشمند الزامی میباشد").max(60, "جنس بند ساعت هوشمند نباید بیشتر از 60 کاراکتر باشد"),
    Appropriate: Yup.string().required("جنسیت کاربر الزامی میباشد").max(20, "سیمکارت ساعت هوشمند نمیتواند بیشتر از 20 کاراکتر باشد"),
    color: Yup.array().required("رنگ ساعت هوشمند الزامی میباشد"),

    detail: Yup.string().min(4, "جزئیات ساعت هوشمند نمیتواند کمتر از 4 کاراکتر باشد").max(700, "جزئیات ساعت هوشمند نمیتواند بیشتر از 700 کاراکتر باشد")
})