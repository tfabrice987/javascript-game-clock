const hours = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI']

const clock = document.querySelector('.clock')

let degres = 0
let dummyHour = `
    <div class="hour-needle"></div>
    <div class="minute-needle"></div>
    <div class="second-needle"></div>
    <div class="round"></div>
`
hours.forEach((hour, index) => {
    const template = `<div class="hour hour-${index + 1}" style="transform: rotate(${degres}deg);">${hour}</div>`
    degres += 30
    dummyHour += template
})
clock.innerHTML = dummyHour

const animate = (set, duration, target) => {
    document.querySelector(target).animate([
        { transform: `rotate(${set}deg)` },
        { transform: `rotate(${set + 360}deg)` }
    ], { duration: duration, iterations: Infinity })
}

const setTime = () => {
    const second = new Date().getSeconds() * 6
    const minute = new Date().getMinutes() * 6
    const hour = new Date().getHours() * 30

    animate(second, 60000, '.second-needle')
    animate(minute, 3600000, '.minute-needle')
    animate(hour, 86400000 / 2, '.hour-needle')
}
setTime()

let checker = true

const hideSecond = () => {
    if (checker === true) {
        checker = !checker
        document.querySelector('.second-needle').style.opacity = 1
    } else {
        checker = !checker
        document.querySelector('.second-needle').style.opacity = 0
    }
}

