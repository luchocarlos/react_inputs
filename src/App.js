import './App.css';

function App() {
  return (
    <div className="inputs">
      
      <h1>INPUTS</h1>
      <form className="mis_inputs"> 
        <p>Input</p> <p class="hover">Hover</p> <p class="focus">Focus</p>
        <label>Label</label><label>Label</label><label className="label_c">Label</label>
        <input class="input_a" placeholder="Placeholder"></input>
        <input class="input_b" placeholder="Placeholder"></input>
        <input class="input_c" placeholder="Placeholder"></input>



        <p>Input Error</p> <p class="hover">Hover</p> <p class="focus">Focus</p>
        <label class="error_la">Label</label><label>Label</label><label class="error_lc">Label</label>
        <input class="error_a" placeholder="Placeholder"></input>
        <input class="error_b" placeholder="Placeholder"></input>
        <input class="error_c" placeholder="Placeholder"></input>

        <p>Input Disable</p> 
        <label>Label</label>
        <input class="disable" placeholder="Placeholder"></input>
        
        <p>Input helper text</p> <p>Input helper text error</p>
        <label>Label</label><label class="text_error">Label</label>
        <input class="h_text" placeholder="Placeholder"></input>
        <input class="htext_error" placeholder="Placeholder"></input>
        <label >Some interesting text</label><label class="text_error">Some interesting text</label>

        <p>Input starIcon</p><p>Input endIcon</p>
        <label>Label</label><label>Label</label>        
        <input class="input_icon" placeholder="&#128394; Placeholder"></input>
        <input class="input_iconf" placeholder="Placeholder  &#128271;"></input>
        

        <p>Input value Text</p> 
        <label>Label</label>
        <input class="val_text" value="Text"></input>


        <p>Input size sm</p> <p >Input size md</p> 
        <label>Label</label><label>Label</label>
        <input class="sm" placeholder="Placeholder"></input>
        <input class="md" placeholder="Placeholder"></input>
        
        
        <p>Input fullwidth</p> 
        <label>Label</label>
        <input class="full_width" value="Text"></input>
         
        <p>Input multiline row=4</p>
        <label>Label</label>
        <textarea rows="4" class="multiline" placeholder="Placeholder" ></textarea>        

      </form>

      <footer>
     	  <p>Icons: https://unicode-table.com/es/1F6B2/</p>
        <p>create by luchocarlos-devChallenges.io</p>
     </footer>

    </div>
  );
}

export default App;
