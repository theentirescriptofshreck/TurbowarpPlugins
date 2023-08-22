// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best
var tilesx = [];
var tilesy = [];
var tilesw = [];
var tilesh = [];
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
      name: 'Pizza Knight Library',

      blocks: [
        { //download function
          opcode: 'collide',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            x : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            w: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
            },
            h: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
            },
            a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
            },
            b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
            },
            c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
            },
            d: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
            }
          },
          text: 'Does Collide: X1:[x], Y1: [y] W1:[w], H1:[h], X2[a], Y2:[b], W2:[c], H2:[c]'
        },
        { //download function
          opcode: 'poll_tile',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            x : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            w: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
            },
            h: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
            },
            c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 11
            },
          },
          text: 'Poll Tile: X:[x], Y: [y] W:[w], H:[h], Costume:[c]'
        },
        { //download function
          opcode: 'get_tile_property',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            property_type : {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "x"
            },
            i: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          },
          text: 'Tile Property: Property Type:[property_type], Item: [i]'
        },
        { //download function
          opcode: 'public_collide',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            x : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            y : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            w : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            h : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            stuff : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          },
          text: 'Collision with tiles: X:[x], Y:[y], W:[w], H:[h], Tiles:[stuff]'
        }
      ]
    };
  }

    collide(x, y, w, h, a, b, c, d) {
      function within(value,mn,mx){
        return (mn<=value)&&(mx>=value);
      }
      return (within(x,a,a+c)||within(x+w,a,a+c))&&(within(y,b,b+d)||within(y+h,b,b+d));
    },
    poll_tile(x,y,w,h,c,i){
      tilesx[i]=x;
      tilesy[i]=y;
      tilesw[i]=w;
      tilesh[i]=h;
      tilesc[i]=c;
    },
    get_tile_property(property_type,i){
      var out = 0;
      if(property_type=="x"){
        out=tilesx[i];
      }else{if(property_type=="y"){
        out=tilesy[i];
      }else{if(property_type=="w"){
        out=tilesw[i];
      }else{if(property_type=="h"){
        out=tilesh[i];
      }else{if(property_type=="c"){
        out=tilesc[i];
      }}}}}
      return out;
    }
    public_collide(x,y,w,h,stuff){
      function collide(xa,ya,wa,ha,a,b,c,d){
        function within(val,mn,mx){
          return (val>=mn)&&(val<=mx)
        }
        return (within(xa,a,a+c)||within(xa+wa,a,a+c))&&(within(ya,b,b+d)||within(ya+ha,b,b+d))
      }
      var out=false;
      var i;
      for(i=1;i<=stuff;i++){
        if(!out){
          out=collide(x,y,w,h,tilesx[i],tilesy[i],tilesw[i],tilesh[i]);
        }
      }
      return out;
    }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());
