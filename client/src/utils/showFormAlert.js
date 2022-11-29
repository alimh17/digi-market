export const showMobileFormAlert = (err) => {

    switch (Object.keys(err)[0]) {
        case 'name': return err.name
        case 'price': return err.price
        case 'screen': return err.screen
        case 'brand': return err.brand
        case 'image': return err.image
        case 'mainImage': return err.mainImage
        case 'network': return err.network
        case 'cpu_series': return err.cpu_series
        case 'gpu_maker': return err.gpu_maker
        case 'cpu_maker': return err.cpu_maker
        case 'cpu_model': return err.cpu_model
        case 'ram': return err.ram
        case 'ram_type': return err.ram_type
        case 'dimensions': return err.dimensions
        case 'weight': return err.weight
        case 'simcart': return err.simcart
        case 'color': return err.color
        case 'body': return err.body
        case 'SpecialFeatures': return err.SpecialFeatures
        case 'detail': return err.detail
        case 'internal_ram': return err.internal_ram
        case 'joyStick': return err.joyStick
        case 'ram_space': return err.ram_space
        case 'connection': return err.connection
        case 'screenForm': return err.screen_form
        case 'FrameComposition': return err.Frame_composition
        case 'Application': return err.Application
        case 'Appropriate': return err.Appropriate
        case 'strapMaterial': return err.strapMaterial
        default: return ""
    }
}