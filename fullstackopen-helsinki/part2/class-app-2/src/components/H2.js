const H2 = ( {browserName, browserVersion, userLanguage, appleWebKitVersion} ) => {
    return(
        <div>
            <h2>You are using {browserName} version {browserVersion}, default language: {userLanguage} AppleWebKit version: {appleWebKitVersion}</h2>
        </div>
    )
}

export default H2