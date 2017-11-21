// @author Ulrich Hahn
// this is free software, use at your own risk

// creator, representing the 32 Bytes Userdata on a RFID Tag
// expected as Hex representation here
TagHex=function(udatAsHex){
	this.udat=udatAsHex;

}

// helper functions, cutting out byte halves
TagHex.prototype.Lnibble=function(i){
	return Number("0x" + this.udat.charAt(i*2+1));
	};

TagHex.prototype.Hnibble=function(i){
	return Number("0x" + this.udat.charAt(i*2));
	};

TagHex.prototype.HL2num=function(h,l){
	var H=(h & 3) << 2;
    var L=(l & 12) >> 2;
    return (H | L);
	};

// getter to combine the snippets to the item(=bar)code
TagHex.prototype.getbar=function(){
this.sbarcode="";
this.sbarcode+=this.HL2num(this.Lnibble(2),this.Hnibble(1));
this.sbarcode+=this.Hnibble(2);
this.sbarcode+=this.HL2num(this.Hnibble(3),this.Lnibble(3));
this.sbarcode+=this.Lnibble(4);
this.sbarcode+=this.HL2num(this.Lnibble(5),this.Hnibble(4));
this.sbarcode+=this.Hnibble(5);
this.sbarcode+=this.HL2num(this.Hnibble(6),this.Lnibble(6));
this.sbarcode+=this.Lnibble(7);

return this.sbarcode;
};
