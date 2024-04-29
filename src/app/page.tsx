const mockUrls = [
  "https://utfs.io/f/6a67dd35-f31b-4748-839b-022d510ccb43-nqy3t4.jpeg",
  "https://utfs.io/f/14693e8f-d7ce-45d0-9919-2141d4e0e1e5-v5vqs5.jpeg",
  "https://utfs.io/f/ba5ace21-7b78-4862-a08f-f5ebfd7d6be4-jk0203.jpg",
  "https://utfs.io/f/63f65deb-7484-4561-90c0-50c6a32e64e4-hzt98r.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
