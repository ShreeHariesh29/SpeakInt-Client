import React from 'react'
import logo from '../Nav and side bar components/Nav and sidebar img/SpeakInt-Blue.png'
import worldcloudimg from './result img/tag-cloud-generator-tool-wordle-640x323.jpg'


function Resultpdf() {
  return (
    <div className='container' style={{width:'1000px', height:' 1300px', border:'2px gray solid', marginLeft:'100px,',marginTop:'50px'}}>
        <div style={{display:'flex', justifyContent:'space-between',marginTop:'50px',}}>
            <div><img style={{width:'200px',  paddingLeft:'50px'}} src={logo}  alt="" /></div>
            <div><p style={{width:'200px',  paddingLeft:'30px', fontSize:'20px',marginTop:'30px'}}>time</p></div>
        </div>
        <div>
            <h1 style={{textAlign:'center'}}>Original Name of the File</h1>
            <h2 style={{textAlign:'center',color:'#3b3939' }}>Original Name of the File</h2>
            <div style={{paddingLeft:'30px',paddingRight:'30px',}}>
            <h2 style={{textAlign:'start',marginTop:'50px'}}>Translated Text :</h2>
            <p style={{ textAlign:'center',marginTop:'20px',lineHeight:'30px'}}> <span style={{color:'darkblue', fontWeight:'800'}}>Gandhi</span> was the youngest child of his father’s fourth wife. His father—Karamchand Gandhi, who was the dewan (chief minister) of Porbandar, the capital of a small principality in western India
                (in what is now Gujarat state) under British suzerainty—did not have much in the way of a formal education. He was, however, an able administrator who knew how to steer his way between the capricious princes, their long-suffering 
                subjects, and the headstrong <span style={{color:'darkblue', fontWeight:'800'}}>British political</span>  officers in power.Gandhi’s mother, Putlibai, was completely absorbed in religion, did not care much for finery or jewelry, divided her time between her home and the temple, 
                fasted frequently, and wore herself out in days and nights of nursing whenever there was sickness in the family. Mohandas grew up in a home steeped in Vaishnavism—worship of the Hindu god Vishnu—with a strong tinge of Jainism, a morally
                rigorous Indian religion whose chief tenets are nonviolence and the belief that everything in the universe is eternal. Thus, he took for granted ahimsa (noninjury to all living beings), vegetarianism, fasting for self-purification, and mutual tolerance 
                between adherents of various creeds and sects.</p>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
                <div style={{}}>
                <h2 style={{color:'#001379',marginTop:'20px',fontSize:'28px'}}>NER :</h2>
                <p style={{marginTop:'20px',marginLeft:'40px',fontSize:'20px'}}>English  : <span style={{fontSize:'25px',fontWeight:'bold',color:'blue'}}>Language</span></p>
                <p style={{marginTop:'20px',marginLeft:'40px',fontSize:'20px'}}>Hotel Paradise  : <span style={{fontSize:'25px',fontWeight:'bold',color:'darkblue'}}>place</span></p>
                </div>
                <div style={{paddingRight:'150px'}}>
                <h2 style={{color:'#001379',marginTop:'20px',fontSize:'28px'}}>SENTIMENT :</h2>
                <button style={{width:'150px',height:'45px',marginLeft:'20px', marginTop:'20px',  borderRadius:'10px', border:'darkgreen 2px solid',backgroundColor:'#19f754', color:'#084d1b', fontSize:'20px', fontWeight:'bold'}}>Positive</button>
                <button style={{width:'150px',height:'45px',marginLeft:'20px', marginTop:'20px',  borderRadius:'10px', border:'darkred 2px solid',backgroundColor:'#f26868', color:'#5c0303', fontSize:'20px', fontWeight:'bold'}}>Negative</button>
                </div>
            </div>
            <h2 style={{marginTop:'50px',color:'#001379',fontSize:'28px'}}>WORLD CLOUD :</h2>
            <img style={{marginTop:'50px',marginLeft:'10%'}} src={worldcloudimg} alt="" />
            </div>
           
           
        </div>

    </div>
  )
}

export default Resultpdf