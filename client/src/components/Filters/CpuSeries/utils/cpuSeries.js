export const cpuSeriesList = [
    "Celeron",
    "ATHLON",
    "M1",
    "Core i3",
    "Core i5",
    "Core i7",
    "Core i9",
    "Ryzen 3",
    "Ryzen 5",
    "Ryzen 7",
]


export const switchCpu = (cpu) => {
    switch (cpu) {
        case "Celeron": return "Celeron"
        case "ATHLON": return "ATHLON"
        case "M1": return "M1"
        case "Core i3": return "core_i3"
        case "Core i5": return "core_i5"
        case "Core i7": return "core_i7"
        case "Core i9": return "core_i9"
        case "Ryzen 3": return "Ryzen_3"
        case "Ryzen 5": return "Ryzen_5"
        case "Ryzen 7": return "Ryzen_7"
        default: return ""
    }
}