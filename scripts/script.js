var photo1 = document.getElementById ('photo1');

photo1.addEventListener('mouseover', function() {
  photo1.src = "images/img2.jpg";
});

photo1.addEventListener('mouseout', function() {
  photo1.src = "images/img1.jpg";
});

var photo2 = document.getElementById ('photo2');

photo2.addEventListener('mouseover', function() {
  photo2.src = "images/img4.jpg";
});

photo2.addEventListener('mouseout', function() {
  photo2.src = "images/img3.jpg";
});
