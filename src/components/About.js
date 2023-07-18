import React from 'react'

export default function About(props) {
  
//   const[mystyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white" 
//   })

    let myStyle = {
        color: props.mode === 'Dark'?'white':'#042743',
        backgroundColor: props.mode ==='Dark'?'rgb(36 74 104)':'white'
    }
  
  return (  
    <div className="container" style={myStyle}>
      <h2>About Us</h2>
      <div  className="accordion" id="accordionExample">
        <div  className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               TextHelp gives you a way to analyze your text quickly and efficiently. Be it word count, character count, etc
            </div>
            </div>
        </div>
        <div style={myStyle} className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextHelp is a free character counter tool that provides instant character count & word coutn statistics for a given text. TextHelp reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
            </div>
        </div>
        <div style={myStyle} className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as chrome, firefox, internet explorer, safari opera. It suit to count characters in facebook , blog, books, excel document, pdf document, essays, etc.
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}
