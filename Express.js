const express = require("express");

const app = express();




app.listen(3003); 


// then run in terminal as node Express.js

// if any problem arieses then you can try "npm insatll express" comman in your terminal 


// then go to livehost:3003


<div className="editor__file-name">
  <span>
    {this.props.file.name}
    <UnsavedChangesIndicator />
  </span>
  <Timer />
  <button
    className="copy-button"
    onClick={() => {
      navigator.clipboard.writeText(this._cm.getValue());
      alert('Code copied!');
    }}
  >
    Copy
  </button>
</div>
