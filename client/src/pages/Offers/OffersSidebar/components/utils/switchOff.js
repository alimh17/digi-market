export const switchOff = (off) => {
    switch (off) {
        case 'کم ترین تخفیف': return 'less'
        case 'بیشترین تخفیف': return 'hight'
        default: return ''
    }
}