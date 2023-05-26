import H2 from './H2'

const Navigator = () => {
    console.log(window.navigator.userAgent)
    let browserName = (function (agent) { 
        switch (true){
            case agent.indexOf("edge") > -1: return "MS Edge"
            case agent.indexOf("edg/") > -1: return "Edge Chromium based"
            case agent.indexOf("chrome") > -1: return "Google Chrome"
            case agent.indexOf("firefox") > -1: return "Mozilla Firefox"
            case agent.indexOf("safari") > -1: return "Safari"
        }
    })(window.navigator.userAgent.toLowerCase());

    let userLanguage = (function (agent) { 
        switch (true){
            case agent === 'pt-br': return "PT-BR"
        }
    })(window.navigator.language.toLowerCase());


    let browserAppleWebKit = (function (agent) {
        let currentIndex = agent.indexOf("applewebkit") + "applewebkit/".length
        let str = ''
        while (true) {
            if (agent[currentIndex] === ' ')
                break
            str += agent[currentIndex]
            currentIndex++
        }
        return str
    })(window.navigator.userAgent.toLowerCase());

    let browserVersion = (function (agent) {
        let currentIndex

        switch (true){
            case agent.indexOf("edge") > -1: 
                currentIndex= agent.indexOf("edge") + "edge/".length
                break
            case agent.indexOf("edg/") > -1: currentIndex=agent.indexOf("edg/")
            case agent.indexOf("chrome") > -1: 
                currentIndex=agent.indexOf("chrome") + "chrome/".length
                break
            case agent.indexOf("firefox") > -1: currentIndex=agent.indexOf("firefox")
                currentIndex=agent.indexOf("firefox")
                break
            case agent.indexOf("safari") > -1: 
                currentIndex=agent.indexOf("safari") + "safari".length
                break
        }

        let str = ''
        while (true) {
            if (agent[currentIndex] == ' ')
                break
            str += agent[currentIndex]
            currentIndex++
        }
        return str
    })(window.navigator.userAgent.toLowerCase());

    return(
        <div>
            <H2 browserName={browserName} browserVersion={browserVersion} userLanguage={userLanguage} appleWebKitVersion={browserAppleWebKit} />
        </div>
    )
}

export default Navigator