# DM11Tags
JavaScript decoding of yet another Library Tag Model

The User data found on these tags looks like this:
0B41244D54655D18000000000000BB4CA484FF4F42504401500400000000F555
  |..item code..|           |CRC|...constant remainder..........|  

The Hex representation initializes the TagHex object which may offers some methods on it.

## currently 
getbar() shows a string representation of the item code

## future
checkCRC() may verify the CRC
CRC() may set it after changes
toString() may return the UserData after changes

The meaning of the constant remainder remains in the dark.
