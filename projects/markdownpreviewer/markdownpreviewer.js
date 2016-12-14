var Getmarkdown = React.createClass({
  getInitialState:function(){
    return {marked:"I'm a heading!  \n==============\nI'm a smaller heading..  \n-----------------------  \n### I'm yet another smaller heading...  \n#### I'm even smaller yet...  \n  \n~~I was a mistake~~  \n  \nI'm a paragraph because there is a blank line between  \nme and the mistake...  \n  \n*Hey, I'm italicized* **and I'm strong!**  \n  \nThings to do:  \n  \n* look to the right  \n*  ohhh! I'm second..  \n  \n*[see ya! ;)](https://www.google.com)*",markup:marked("I'm a heading!  \n==============\nI'm a smaller heading..  \n-----------------------  \n### I'm yet another smaller heading...  \n#### I'm even smaller yet...  \n  \n~~I was a mistake~~  \n  \nI'm a paragraph because there is a blank line between  \nme and the mistake...  \n  \n*Hey, I'm italicized* **and I'm strong!**  \n  \nThings to do:  \n  \n* look to the right  \n*  ohhh! I'm second..  \n  \n*[see ya! ;)](https://www.google.com)*")};
  },
  handleChange:function(event) {
   var output = marked(event.target.value);
    this.setState({marked: event.target.value,markup:output});
  },
  render:function(){
    return (<div><textarea id="markdown" value={this.state.marked} onChange={this.handleChange}>
        </textarea>
          <div id="previewer" dangerouslySetInnerHTML={{__html:this.state.markup}}></div></div>
           );
  }
});

ReactDOM.render(<Getmarkdown/>,document.body);