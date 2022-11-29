const Joi = require('joi');

const mobileValidate = Joi.object({
    name: Joi.string()
        .required()
        .min(4).message("نام موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(255).message("نام موبایل نمیتواند بیشتر از 255 کاراکتر باشد"),
    price: Joi.string()
        .required()
        .min(4).message("قیمت موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(9).message("قیمت موبایل نمیتواند بیشتر از 9 کاراکتر باشد"),
    screen: Joi.string()
        .required()
        .min(4).message("اندازه صفحه موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(60).message("اندازه صفحه موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    brand: Joi.string()
        .required()
        .min(2).message("برند موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("برند موبایل نباید بیشتر از 60 کاراکتر باشد"),
    image: Joi.any().required(),
    mainImage: Joi.any().required(),
    network: Joi.string()
        .required()
        .min(2).message("شبکه نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("شبکه نباید بیشتر از 60 کاراکتر باشد"),
    ram: Joi.string()
        .required()
        .min(2).message("رم موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("رم موبایل نباید بیشتر از 60 کاراکتر باشد"),
    dimensions: Joi.string()
        .required()
        .min(2).message("ابعاد موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("ابعاد موبایل نباید بیشتر از 60 کاراکتر باشد"),
    weight: Joi.string()
        .required()
        .min(2).message("وزن موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("وزن موبایل نباید بیشتر از 60 کاراکتر باشد"),
    color: Joi.string()
        .required()
        .min(2).message("رنگ موبایل نمیتواند کمتر از 2 کاراکتر باشد")
        .max(60).message("رنگ موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    simcart: Joi.string()
        .required()
        .min(2).message("سیمکارت موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("سیمکارت موبایل نباید بیشتر از 60 کاراکتر باشد"),
    body: Joi.string()
        .min(4).message("بدنه موبایل نمیتواند کمتر از 8 کاراکتر باشد")
        .max(500).message("بدنه موبایل نمیتواند بیشتر از 500 کاراکتر باشد"),
    features: Joi.string()
        .min(4).message("ویژگی موبایل نمیتواند کمتر از 8 کاراکتر باشد")
        .max(500).message("ویژگی موبایل نمیتواند بیشتر از 500 کاراکتر باشد"),
    category: Joi.string()
})


const laptopValdidate = Joi.object({
    name: Joi.string()
        .required()
        .min(4).message("نام موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(255).message("نام موبایل نمیتواند بیشتر از 255 کاراکتر باشد"),
    price: Joi.string()
        .required()
        .min(4).message("قیمت موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(9).message("قیمت موبایل نمیتواند بیشتر از 9 کاراکتر باشد"),
    screen: Joi.string()
        .required()
        .min(4).message("اندازه صفحه موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(60).message("اندازه صفحه موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    brand: Joi.string()
        .required()
        .min(2).message("برند موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("برند موبایل نباید بیشتر از 60 کاراکتر باشد"),
    weight: Joi.string()
        .required()
        .min(2).message("وزن موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("وزن موبایل نباید بیشتر از 60 کاراکتر باشد"),
    color: Joi.string()
        .required()
        .min(2).message("رنگ موبایل نمیتواند کمتر از 2 کاراکتر باشد")
        .max(60).message("رنگ موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    image: Joi.any().required(),
    mainImage: Joi.any().required(),
    dimensions: Joi.string()
        .required()
        .min(2).message("ابعاد موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("ابعاد موبایل نباید بیشتر از 60 کاراکتر باشد"),
    cpu_series: Joi.string()
        .required()
        .min(2).message("شبکه نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("شبکه نباید بیشتر از 60 کاراکتر باشد"),
    cpu_model: Joi.string()
        .required()
        .min(2).message("شبکه نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("شبکه نباید بیشتر از 60 کاراکتر باشد"),
    ram: Joi.string()
        .required()
        .min(2).message("رم موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("رم موبایل نباید بیشتر از 60 کاراکتر باشد"),
    ram_type: Joi.string()
        .required()
        .min(2).message("رم موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("رم موبایل نباید بیشتر از 60 کاراکتر باشد"),
    gpu_maker: Joi.string()
        .required()
        .min(2).message("سیمکارت موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("سیمکارت موبایل نباید بیشتر از 60 کاراکتر باشد"),
    cpu_maker: Joi.string()
        .required()
        .min(2).message("سیمکارت موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("سیمکارت موبایل نباید بیشتر از 60 کاراکتر باشد"),
    detail: Joi.string()
        .min(4).message("بدنه موبایل نمیتواند کمتر از 8 کاراکتر باشد")
        .max(700).message("بدنه موبایل نمیتواند بیشتر از 700 کاراکتر باشد"),
    category: Joi.string()

})

const tabletValidation = Joi.object({
    name: Joi.string()
        .required()
        .min(4).message("نام تبلت نباید کمتر از 4 کاراکتر باشد")
        .max(255).message("نام تبلت نمیتواند بیشتر از 255 کاراکتر باشد"),
    price: Joi.string()
        .required()
        .min(4).message("قیمت تبلت نباید کمتر از 4 کاراکتر باشد")
        .max(9).message("قیمت تبلت نمیتواند بیشتر از 9 کاراکتر باشد"),
    brand: Joi.string()
        .required()
        .min(2).message("برند تبلت نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("برند تبلت نباید بیشتر از 60 کاراکتر باشد"),
    image: Joi.any().required(),
    mainImage: Joi.any().required(),
    network: Joi.string()
        .required()
        .min(2).message("شبکه نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("شبکه نباید بیشتر از 60 کاراکتر باشد"),
    ram: Joi.string()
        .required()
        .min(2).message("رم تبلت نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("رم تبلت نباید بیشتر از 60 کاراکتر باشد"),
    internal_ram: Joi.string()
        .required()
        .min(2).message("حافظه داخلی تبلت نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("حافظه داخلی تبلت نباید بیشتر از 60 کاراکتر باشد"),
    weight: Joi.string()
        .required()
        .min(2).message("وزن تبلت نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("وزن تبلت نباید بیشتر از 60 کاراکتر باشد"),
    color: Joi.string()
        .required()
        .min(2).message("رنگ تبلت نمیتواند کمتر از 2 کاراکتر باشد")
        .max(60).message("رنگ تبلت نمیتواند بیشتر از 60 کاراکتر باشد"),
    simcart: Joi.string()
        .required()
        .min(2).message("سیمکارت تبلت نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("سیمکارت تبلت نباید بیشتر از 60 کاراکتر باشد"),
    body: Joi.string()
        .min(4).message("بدنه تبلت نمیتواند کمتر از 8 کاراکتر باشد")
        .max(500).message("بدنه تبلت نمیتواند بیشتر از 500 کاراکتر باشد"),
    detail: Joi.string()
        .min(4).message("ویژگی تبلت نمیتواند کمتر از 4 کاراکتر باشد")
        .max(700).message("ویژگی تبلت نمیتواند بیشتر از 700 کاراکتر باشد"),
    category: Joi.string()

})



const consoleValidation = Joi.object({
    name: Joi.string()
        .required()
        .min(4).message("نام کنسول بازی نباید کمتر از 4 کاراکتر باشد")
        .max(255).message("نام کنسول بازی نمیتواند بیشتر از 255 کاراکتر باشد"),
    price: Joi.string()
        .required()
        .min(4).message("قیمت کنسول بازی نباید کمتر از 4 کاراکتر باشد")
        .max(32).message("قیمت کنسول بازی نمیتواند بیشتر از 32 کاراکتر باشد"),
    connection: Joi.string()
        .required()
        .min(4).message("فناوری ارتباطی نباید کمتر از 4 کاراکتر باشد")
        .max(60).message("فناوری ارتباطی نمیتواند بیشتر از60  کاراکتر باشد"),
    joyStick: Joi.string()
        .required()
        .min(2).message("تعداد دسته نباید کمتر از 4 کاراکتر باشد")
        .max(60).message("تعداد دسته نمیتواند بیشتر از 60  کاراکتر باشد"),
    dimensions: Joi.string()
        .required()
        .min(2).message("ابعاد کنسوی بازی نباید کمتر از 4 کاراکتر باشد")
        .max(60).message("ابعاد کنسوی بازی نمیتواند بیشتر از 60 کاراکتر باشد"),
    image: Joi.any().required(),
    mainImage: Joi.any().required(),
    ram: Joi.string()
        .required()
        .min(2).message("حافظه کنسول بازی نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("حافظه کنسول بازی نباید بیشتر از 60 کاراکتر باشد"),
    ram_space: Joi.string()
        .required()
        .min(2).message("ظرفیت هارد دیسک  نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("ظرفیت هارد دیسک  نباید بیشتر از 60 کاراکتر باشد"),
    detail: Joi.string()
        .min(4).message("جزئیات کنسول بازی نمیتواند کمتر از 4 کاراکتر باشد")
        .max(700).message("جزئیات کنسول بازی نمیتواند بیشتر از 700 کاراکتر باشد"),
    category: Joi.string()

})


const smartWatchValidation = Joi.object({
    name: Joi.string().required().min(4).message("نام ساعت هوشمند نباید کمتر از 4 کاراکتر باشد").max(255).message("نام ساعت هوشمند نباید بیشتر از 255 کاراکتر باشد").trim(),
    price: Joi.string().required().min(4).message("قیمت ساعت هوشمند نباید کمتر از 4 کاراکتر باشد").max(9).message("قیمت ساعت هوشمند نباید بیشتر از  9 کاراکتر باشد").trim(),
    brand: Joi.string().required(),
    image: Joi.any().required(),
    mainImage: Joi.any().required(),
    screenForm: Joi.string().required().max(60).message("فرم صفحه نمیتواند بیشتر از60 کاراکتر باشد"),
    weight: Joi.string().required().max(60).message("وزن ساعت هوشمند نباید بیشتر از 60 کاراکتر باشد"),
    FrameComposition: Joi.string().required().max(60).message("ابعاد قاب نمیتواند بیشتر از 60 کاراکتر باشد"),
    Application: Joi.string().required().max(60).message("کاربرد ساعت هوشمند نباید بیشتر از 60 کاراکتر باشد"),
    strapMaterial: Joi.string().required().max(60).message("کاربرد ساعت هوشمند نباید بیشتر از 60 کاراکتر باشد"),
    Appropriate: Joi.string().required().max(20).message("سیمکارت ساعت هوشمند نمیتواند بیشتر از 20 کاراکتر باشد"),
    color: Joi.string().required()
        .min(2).message("رنگ ساعت هوشمند نمیتواند کمتر از 2 کاراکتر باشد")
        .max(60).message("رنگ ساعت هوشمند نمیتواند بیشتر از 60 کاراکتر باشد"),
    detail: Joi.string().min(4).message("جزئیات ساعت هوشمند نمیتواند کمتر از 4 کاراکتر باشد").max(700).message("جزئیات ساعت هوشمند نمیتواند بیشتر از 700 کاراکتر باشد"),
    category: Joi.string()

})



module.exports = {
    mobileValidate,
    laptopValdidate,
    tabletValidation,
    consoleValidation,
    smartWatchValidation
}