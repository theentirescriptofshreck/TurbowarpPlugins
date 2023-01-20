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
      name: 'Usefull Stuff',

      blocks: [
        { //download function
          opcode: 'mp',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            value : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            from1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            from2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
            },
            to1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
            },
            to2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 250
            }
          },
          text: 'Map: [value], From: [from1] [from2], And To: [to1] [to2]'
        },
      ]
    };
  }

    mp(value, from1, from2, to1, to2) {
        var a = {};
        a.a = (from2 - from1);
        a.b = (value - from1);
        a.c = (to2 - to1);
        a.d = ((value * a.c) + to1);
        return a.d;
    }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());