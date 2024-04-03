import './Settings.css'

export default function Settings(){
    return(
        <div style={{display:"flex", flex:1 }}>
            <div className="settings" style={{backgroundColor:"gray"}}>
                Settings
                <div>
                    <div>Theme</div>
                    <div style={{backgroundColor:"darkolivegreen", flex:1, borderRadius:"20px", padding:"20px"}}>SDark mode</div>
                    </div>
                <div>
                    <div>Account</div>
                    <div style={{backgroundColor:"darkolivegreen", flex:1, borderRadius:"20px", padding:"20px"}}>SDark mode</div>
                </div>
                <div>
                    <div>Administrator</div>
                    <div style={{backgroundColor:"darkolivegreen", flex:1, borderRadius:"20px", padding:"20px"}}>SDark mode</div>
                </div>
            </div>
        </div>
    )
}