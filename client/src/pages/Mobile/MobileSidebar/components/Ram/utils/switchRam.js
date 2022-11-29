export const switchRam = (ram) => {
    switch (ram) {
        case '8 گیگابایت': return 'eight'
        case '16 گیگابایت': return 'Sixteen'
        case '32 گیگابایت': return 'thirty_two'
        case '64 گیگابایت': return 'sixty_four'
        case '128 گیگابایت': return 'one_hundred_twenty_eight'
        case '256 گیگابایت': return 'two_hundred_fifty_six'
        case '500 گیگابایت': return 'five_hundred'
        default: return ''
    }
}