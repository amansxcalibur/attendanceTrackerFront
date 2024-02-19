import './Home.css'
import Perc from '../Features/Perc.js'
import Leaves from '../Features/Leaveleft.js'

export default function Home(){
    return(
      <>
      <div class='home' style={{backgroundColor:'blue', borderRadius:"20px"}}>
        <h1 style={{paddingLeft:"20px"}}>Home</h1>
        <div class="homcont" style={{backgroundColor:"gray", overflow:"auto"}}>
          <div class="homcontr1" style={{backgroundColor:"cyan", flex: 1, flexWrap:"wrap"}}>
            <div id="homcontall" style={{backgroundColor:"brown", flex:5}}>prof</div>
            <div id="homcontall" style={{backgroundColor:"brown", flex:6}}>palce</div>
          </div>
          <div class="homcontr2" style={{backgroundColor:"cyan", flex: 4, flexWrap:"wrap"}}>
            <div style={{backgroundColor:"green", flex:8, display:'flex', flexDirection:"column"}}>
              <div id="homcontall" style={{backgroundColor:'cyan', flex:8, display:"flex", flexDirection:"column"}}>
                <h2 style={{paddingLeft:"20px"}}>Perc</h2>
                <Perc/>
              </div>
              <div id="homcontall" style={{backgroundColor:'cyan', flex:2}}>exam info???</div>
            </div>
            <div style={{backgroundColor:"green", flex:4, display:'flex', flexDirection:'column'}}>
              <div id="homcontall" style={{background:'cyan', flex:8, display:"flex", flexDirection:"column"}}>
                <h2>Leaves</h2>
                <Leaves/>
              </div>
              <div id="homcontall" style={{backgroundColor:"cyan", flex:6}}>some pic</div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }