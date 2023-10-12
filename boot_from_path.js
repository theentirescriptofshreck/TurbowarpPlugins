// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best

class MyExtension {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'myextensionexample',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Boot Game From Path',

      blocks: [
        { //download function
          
        { //download function
          opcode: 'boot',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            path : {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "C:/Users/"
            },
            w : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 480
            },
            h : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 360
            },
            name : {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "PIRACY IS SORT OF BAD"
            },
          },
          text: 'Boot index.html from [path] and frame width:[w], frame height:[h]. window name:[name]'
        }
        
      ]
    };
  }

    boot(path,w,h,name){
      var out = "file:///"+path;
      var iframe = document.createElement("iframe");
      iframe.id = "iframe";
      iframe.src = out+"index.html";
      iframe.width = w;
      iframe.height = h;
      var newhead = document.createElement("head");
      var newbody = document.createElement("body");
      var title = document.createElement("title");
      title.innerHTML = name;
      newhead.appendChild(title);
      newbody.appendChild(iframe);
      document.head=newhead;
      document.body=newbody;
    }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());
