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
      name: 'Download',

      blocks: [
        { //download function
          opcode: 'download',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            data : {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hey You Guys'
            },
            filename : {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'savefile.txt'
            },
            type : {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'text/plain'
            },
          },
          text: 'Download (File Contents: [data], File Name: [filename], Type: [type])'
        },
      ]
    };
  }
  download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());
