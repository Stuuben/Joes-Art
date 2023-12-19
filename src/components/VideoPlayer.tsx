export const VideoPlayer = () => {
  return (
    <div>
      <video controls muted poster="/assets/poster.png">
        <source src="/assets/timelapspainting.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
