import React, { useState, CSSProperties, useRef, useEffect } from 'react';

interface EditBannerProps {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);
  const [background, setBackground] = useState(banner.background);
  const [coverImage, setcoverImage] = useState(banner.coverImage);

  const handleSave = () => {
    onSave({ ...banner, title, description, cta, image, background, coverImage });
    onClose();
  };

  const images = [
    "https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://plus.unsplash.com/premium_photo-1674641194949-e154719cdc02?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    ""
  
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (containerRef.current) {
      if (e.key === 'ArrowRight') {
        containerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        containerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2 className='text-lg text-pretty text-blue-500'>Edit Banner</h2>
        <div className="p-5">
          <div
            className="flex overflow-x-auto space-x-4"
            ref={containerRef}
            style={{ scrollbarWidth: 'none' }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden cursor-pointer"
                onClick={() => setcoverImage(image)}
              >
                <img src={image} alt={`image-${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div style={styles.formGroup}>
          <label>Title</label>
          <input style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div style={styles.formGroup}>
          <label>Description</label>
          <input style={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div style={styles.formGroup}>
          <label>CTA</label>
          <input style={styles.input} value={cta} onChange={(e) => setCta(e.target.value)} />
        </div>
        <div style={styles.formGroup}>
          <label>Image URL</label>
          <input style={styles.input} value={coverImage} onChange={(e) => setcoverImage(e.target.value)} disabled />
        </div>
        <div style={styles.buttonGroup}>
          <button style={styles.saveButton} onClick={handleSave}>Save</button>
          <button style={styles.cancelButton} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  saveButton: {
    backgroundColor: '#0070f3',
    color: '#333',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  cancelButton: {
    backgroundColor: '#eaeaea',
    color: '#333',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default EditBannerTemplateBs;
