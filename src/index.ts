export const isMac = () => {
    return /macintosh|mac os/i.test(navigator.userAgent)
}

export const isWindows = () => {
    return /windows|win32/i.test(navigator.userAgent)
}

export const isCommandOrCtrl = (e) => {
    return (isMac() && e.metaKey) || (isWindows() && e.ctrlKey)
}