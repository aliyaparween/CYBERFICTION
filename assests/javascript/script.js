function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./assests/image/male0001.png
       ./assests/image/male0002.png
       ./assests/image/male0003.png
       ./assests/image/male0004.png
       ./assests/image/male0005.png
       .//assests/image/male0006.png
       .//assests/image/male0007.png
       ./assests/image/male0008.png
       ./assests/image/male0009.png
       ./assests/image/male0010.png
       ./assests/image/male0011.png
       ./assests/image/male0012.png
       ./assests/image/male0013.png
       ./assests/image/male0014.png
       ./assests/image/male0015.png
       ./assests/image/male0016.png
       ./assests/image/male0017.png
       ./assests/image/male0018.png
       ./assests/image/male0019.png
       ./assests/image/male0020.png
       ./assests/image/male0021.png
       ./assests/image/male0022.png
       ./assests/image/male0023.png
       ./assests/image/male0024.png
       ./assests/image/male0025.png
       ./assests/image/male0026.png
       ./assests/image/male0027.png
       ./assests/image/male0028.png
       ./assests/image/male0029.png
       ./assests/image/male0030.png
       ./assests/image/male0031.png
       ./assests/image/male0032.png
       ./assests/image/male0033.png
       ./assests/image/male0034.png
       ./assests/image/male0035.png
       ./assests/image/male0036.png
       ./assests/image/male0037.png
       ./assests/image/male0038.png
       ./assests/image/male0039.png
       ./assests/image/male0040.png
       ./assests/image/male0041.png
       ./assests/image/male0042.png
       ./assests/image/male0043.png
       ./assests/image/male0044.png
       ./assests/image/male0045.png
       ./assests/image/male0046.png
       ./assests/image/male0047.png
       ./assests/image/male0048.png
       ./assests/image/male0049.png
       ./assests/image/male0050.png
       ./assests/image/male0051.png
       ./assests/image/male0052.png
       ./assests/image/male0053.png
       ./assests/image/male0054.png
       ./assests/image/male0055.png
       ./assests/image/male0056.png
       ./assests/image/male0057.png
       ./assests/image/male0058.png
       ./assests/image/male0059.png
       ./assests/image/male0060.png
       ./assests/image/male0061.png
       ./assests/image/male0062.png
       ./assests/image/male0063.png
       ./assests/image/male0064.png
       ./assests/image/male0065.png
       ./assests/image/male0066.png
       ./assests/image/male0067.png
       ./assests/image/male0068.png
       ./assests/image/male0069.png
       ./assests/image/male0070.png
       ./assests/image/male0071.png
       ./assests/image/male0072.png
       ./assests/image/male0073.png
       ./assests/image/male0074.png
       ./assests/image/male0075.png
       ./assests/image/male0076.png
       ./assests/image/male0077.png
       ./assests/image/male0078.png
       ./assests/image/male0079.png
       ./assests/image/male0080.png
       ./assests/image/male0081.png
       ./assests/image/male0082.png
       ./assests/image/male0083.png
       ./assests/image/male0084.png
       ./assests/image/male0085.png
       ./assests/image/male0086.png
       ./assests/image/male0087.png
       ./assests/image/male0088.png
       ./assests/image/male0089.png
       ./assests/image/male0090.png
       ./assests/image/male0091.png
       ./assests/image/male0092.png
       ./assests/image/male0093.png
       ./assests/image/male0094.png
       ./assests/image/male0095.png
       ./assests/image/male0096.png
       ./assests/image/male0097.png
       ./assests/image/male0098.png
       ./assests/image/male0099.png
       ./assests/image/male0100.png
       ./assests/image/male0101.png
       ./assests/image/male0102.png
       ./assests/image/male0103.png
       ./assests/image/male0104.png
       ./assests/image/male0105.png
       ./assests/image/male0106.png
       ./assests/image/male0107.png
       ./assests/image/male0108.png
       ./assests/image/male0109.png
       ./assests/image/male0110.png
       ./assests/image/male0111.png
       ./assests/image/male0112.png
       ./assests/image/male0113.png
       ./assests/image/male0114.png
       ./assests/image/male0115.png
       ./assests/image/male0116.png
       ./assests/image/male0117.png
       ./assests/image/male0118.png
       ./assests/image/male0119.png
       ./assests/image/male0120.png
       ./assests/image/male0121.png
       ./assests/image/male0122.png
       ./assests/image/male0123.png
       ./assests/image/male0124.png
       ./assests/image/male0125.png
       ./assests/image/male0126.png
       ./assests/image/male0127.png
       ./assests/image/male0128.png
       ./assests/image/male0129.png
       ./assests/image/male0130.png
       ./assests/image/male0131.png
       ./assests/image/male0132.png
       ./assests/image/male0133.png
       ./assests/image/male0134.png
       ./assests/image/male0135.png
       ./assests/image/male0136.png
       ./assests/image/male0137.png
       ./assests/image/male0138.png
       ./assests/image/male0139.png
       ./assests/image/male0140.png
       ./assests/image/male0141.png
       ./assests/image/male0142.png
       ./assests/image/male0143.png
       ./assests/image/male0144.png
       ./assests/image/male0145.png
       ./assests/image/male0146.png
       ./assests/image/male0147.png
       ./assests/image/male0148.png
       ./assests/image/male0149.png
       ./assests/image/male0150.png
       ./assests/image/male0151.png
       ./assests/image/male0152.png
       ./assests/image/male0153.png
       ./assests/image/male0154.png
       ./assests/image/male0155.png
       ./assests/image/male0156.png
       ./assests/image/male0157.png
       ./assests/image/male0158.png
       ./assests/image/male0159.png
       ./assests/image/male0160.png
       ./assests/image/male0161.png
       ./assests/image/male0162.png
       ./assests/image/male0163.png
       ./assests/image/male0164.png
       ./assests/image/male0165.png
       ./assests/image/male0166.png
       ./assests/image/male0167.png
       ./assests/image/male0168.png
       ./assests/image/male0169.png
       ./assests/image/male0170.png
       ./assests/image/male0171.png
       ./assests/image/male0172.png
       ./assests/image/male0173.png
       ./assests/image/male0174.png
       ./assests/image/male0175.png
       ./assests/image/male0176.png
       ./assests/image/male0177.png
       ./assests/image/male0178.png
       ./assests/image/male0179.png
       ./assests/image/male0180.png
       ./assests/image/male0181.png
       ./assests/image/male0182.png
       ./assests/image/male0183.png
       ./assests/image/male0184.png
       ./assests/image/male0185.png
       ./assests/image/male0186.png
       ./assests/image/male0187.png
       ./assests/image/male0188.png
       ./assests/image/male0189.png
       ./assests/image/male0190.png
       ./assests/image/male0191.png
       ./assests/image/male0192.png
       ./assests/image/male0193.png
       ./assests/image/male0194.png
       ./assests/image/male0195.png
       ./assests/image/male0196.png
       ./assests/image/male0197.png
       ./assests/image/male0198.png
       ./assests/image/male0199.png
       ./assests/image/male0200.png
       ./assests/image/male0201.png
       ./assests/image/male0202.png
       ./assests/image/male0203.png
       ./assests/image/male0204.png
       ./assests/image/male0205.png
       ./assests/image/male0206.png
       ./assests/image/male0207.png
       ./assests/image/male0208.png
       ./assests/image/male0209.png
       ./assests/image/male0210.png
       ./assests/image/male0211.png
       ./assests/image/male0212.png
       ./assests/image/male0213.png
       ./assests/image/male0214.png
       ./assests/image/male0215.png
       ./assests/image/male0216.png
       ./assests/image/male0217.png
       ./assests/image/male0218.png
       ./assests/image/male0219.png
       ./assests/image/male0220.png
       ./assests/image/male0221.png
       ./assests/image/male0222.png
       ./assests/image/male0223.png
       ./assests/image/male0224.png
       ./assests/image/male0225.png
       ./assests/image/male0226.png
       ./assests/image/male0227.png
       ./assests/image/male0228.png
       ./assests/image/male0229.png
       ./assests/image/male0230.png
       ./assests/image/male0231.png
       ./assests/image/male0232.png
       ./assests/image/male0233.png
       ./assests/image/male0234.png
       ./assests/image/male0235.png
       ./assests/image/male0236.png
       ./assests/image/male0237.png
       ./assests/image/male0238.png
       ./assests/image/male0239.png
       ./assests/image/male0240.png
       ./assests/image/male0241.png
       ./assests/image/male0242.png
       ./assests/image/male0243.png
       ./assests/image/male0244.png
       ./assests/image/male0245.png
       ./assests/image/male0246.png
       ./assests/image/male0247.png
       ./assests/image/male0248.png
       ./assests/image/male0249.png
       ./assests/image/male0250.png
       ./assests/image/male0251.png
       ./assests/image/male0252.png
       ./assests/image/male0253.png
       ./assests/image/male0254.png
       ./assests/image/male0255.png
       ./assests/image/male0256.png
       ./assests/image/male0257.png
       ./assests/image/male0258.png
       ./assests/image/male0259.png
       ./assests/image/male0260.png
       ./assests/image/male0261.png
       ./assests/image/male0262.png
       ./assests/image/male0263.png
       ./assests/image/male0264.png
       ./assests/image/male0265.png
       ./assests/image/male0266.png
       ./assests/image/male0267.png
       ./assests/image/male0268.png
       ./assests/image/male0269.png
       ./assests/image/male0270.png
       ./assests/image/male0271.png
       ./assests/image/male0272.png
       ./assests/image/male0273.png
       ./assests/image/male0274.png
       ./assests/image/male0275.png
       ./assests/image/male0276.png
       ./assests/image/male0277.png
       ./assests/image/male0278.png
       ./assests/image/male0279.png
       ./assests/image/male0280.png
       ./assests/image/male0281.png
       ./assests/image/male0282.png
       ./assests/image/male0283.png
       ./assests/image/male0284.png
       ./assests/image/male0285.png
       ./assests/image/male0286.png
       ./assests/image/male0287.png
       ./assests/image/male0288.png
       ./assests/image/male0289.png
       ./assests/image/male0290.png
       ./assests/image/male0291.png
       ./assests/image/male0292.png
       ./assests/image/male0293.png
       ./assests/image/male0294.png
       ./assests/image/male0295.png
       ./assests/image/male0296.png
       ./assests/image/male0297.png
       ./assests/image/male0298.png
       ./assests/image/male0299.png
       ./assests/image/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
gsap.to("#page1",{
    scrollTrigger:{
        trigger:'#page1',
        start:'top top',
        end:'bottom top',
        // markers:true,
        pin:true,
        scroller:'#main'
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:'#page2',
        start:'top top',
        end:'bottom top',
        // markers:true,
        pin:true,
        scroller:'#main'
    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:'#page3',
        start:'top top',
        end:'bottom top',
        // markers:true,
        pin:true,
        scroller:'#main'
    }
})
