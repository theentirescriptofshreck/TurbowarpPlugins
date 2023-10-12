// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best
var tilesx = [];
var tilesy = [];
var tilesw = [];
var tilesh = [];
var tilesc = [];
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
      name: 'Boot Game From Disk',

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
          },
          text: 'Boot index.html from [path] and frame width:[w], frame height:[h].'
        }
        
      ]
    };
  }

    boot(path,w,h){
      var out = "file:///"+path;
      var iframe = document.createElement("iframe");
      iframe.id = "iframe";
      iframe.src = out+"index.html";
      iframe.width = w;
      iframe.height = h;
    }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());
