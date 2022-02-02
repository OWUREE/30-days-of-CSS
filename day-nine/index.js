const fileInput = document.getElementById('file-input');
         const text = document.querySelectorAll('.image-list')[0];

         fileInput.addEventListener('change', (e) => {
             const [fileInput] =  e.target.files; 
             const { name : fileName , size } = fileInput;
             const fileSize = (size / 1024).toFixed(1);
             const content = `${fileName} - ${fileSize}KB`;
             text.textContent = content;
         });