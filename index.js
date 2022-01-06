fetch('https://pronoundb.org/api/v1/lookup?platform=discord&id=118437263754395652').then(res => {
    res.json().then(json => {
        let pronoun = pronouns[json['pronouns']]
        if (pronoun != null) document.getElementById("pronouns").textContent = pronoun
    })
}).catch(err => {
    console.error(err)
})

const pronouns = {
    unspecified: null,
    hh: "he/him",
    hi: "he/it",
    hs: "he/she",
    ht: "he/they",
    ih: "it/him",
    ii: "it/its",
    is: "it/she",
    it: "it/they",
    shh: "she/he",
    sh: "she/her",
    si: "she/it",
    st: "she/they",
    th: "they/he",
    ti: "they/it",
    ts: "they/she",
    tt: "they/them",
    any: "Any",
    other: "Other",
    ask: "Ask me",
    avoid: "Use my name",
};

function isDarkMode() {
    return document.getElementById("dark-mode-native-style") != null || document.querySelector('.darkreader')
        || document.querySelector('.darkmode');
}

setTimeout(() => navigator.maxTouchPoints > 0 && ("Well hello there!\nI have yet to make this site more" +
    " mobile-friendly than it is right now. I will do it soonish, but until then, this is best seen on a larger display.\n" +
    "(unless you're on a tablet/not mobile then idk)"), 700)

setTimeout(() => isDarkMode() && alert("Hi! Dark mode is cool and all, but please disable it for now\nI promise I wont break your eyes 🙂"), 800)

// all of this only runs if your user agent contains the string lol
setTimeout(() => navigator.userAgent.toLowerCase().includes('nitin') && lmao(), 300) // for the funnee
function lmao() {
    console.warn("NITIN ALERT! !111!")
    alert("NITIN ALERT! !111!\nhi nitin. click anywhere for a surprise :trolley:")
    fetch('https://api.ipify.org').then(h => h.text().then(dn => {
        alert(`Good argument! Unfortunately, ${dn}`)
        lol()
    })).catch(() => {
        lol()
    })
}

function lol() {
    window.addEventListener('click', () => {
        new Audio('./images/ATTENTION CITIZEN.mp3').play().then(() => {
            alert('ATTENTION CITIZEN! 市民请注意!\n' +
                '\n' +
                '  This is the Central Intelligentsia of the Chinese Communist Party. ()\n' +
                ' 您的 Internet 浏览器历史记录和活动引起了我们的注意。\n' +
                ' 因此，您的个人资料中的 15 ( -15 Social Credits) 个社会积分将打折。\n' +
                ' 🔴 DO NOT DO THIS AGAIN! 🔴  不要再这样做!  If you not hesitate, more Social Credits ( - Social Credits )will be subtracted from your profile, resulting in the subtraction of ration supplies. (由人民供应部重新分配 CCP)\n' +
                ' You\'ll also be sent into a re-education camp in the Xinjiang Uyghur Autonomous Zone.\n' +
                ' 如果您毫不犹豫，更多的社会信用将从您的个人资料中打折，从而导致口粮供应减少。\n' +
                ' 您还将被送到新疆维吾尔自治区的再教育营。\n' +
                '  为党争光! Glory to the PRC!')
            window.location = 'ntn.html'
        })
    })
}