export const switchRam = (ram) => {
    switch (ram) {
        case '4 گیگابایت': return 'four'
        case '8 گیگابایت': return 'eight'
        case '16 گیگابایت': return 'Sixteen'
        case '32 گیگابایت': return 'thirty_two'
        default: return ''
    }
}