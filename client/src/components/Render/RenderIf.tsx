

export default function ({ render = false, children }) {
    return render ? children : null
}