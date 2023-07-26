export default function formatSize(size) {
  console.log("size",size)
  let sizeData = "";
  console.log("Number.isInteger(size)", Number.isInteger(size))
  if (Number.isInteger(parseInt(size))) {
    size=parseInt(size);
    switch(size) {
      case 0:
        // code block
        sizeData = "Extra Large";

        break;
      case 1:
        // code block
        sizeData = "Large";

        break;
        
      case 2:
        // code block
        sizeData = "Medium";

        break;
        
      case 3:
        // code block
        sizeData = "Small";

        break;
      default:
        sizeData=size;
    }

  } else {
    sizeData = size;
  }


  return sizeData;
}
