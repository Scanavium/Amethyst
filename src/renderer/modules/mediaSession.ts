import type { Player } from "@/logic/player.js";

export class MediaSession {
  public constructor(private player: Player) {
    this.player.on("player:play", () => navigator.mediaSession.playbackState = "playing");
    this.player.on("player:pause", () => navigator.mediaSession.playbackState = "paused");
    this.player.on("player:seek", ({track}) => this.updatePositionState(track.getDuration()));
    this.player.on("player:pitchChange", ({track}) => this.updatePositionState(track?.getDuration()));
    this.player.on("player:trackChange", async track => {
      const coverUrl = track.getCover();
      if (!coverUrl) return;

      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.getTitleFormatted(),
        artist: track.getArtistsFormatted(),
        album: track.getAlbum(),
        artwork: [{ src: coverUrl, type: "" }],
      });

      this.updatePositionState(track.getDuration());
    });

  }

  public init() {
    if (!("mediaSession" in navigator)) return console.warn("Media Session API not supported");
    const { setActionHandler } = navigator.mediaSession;

    setActionHandler("play", () => this.player.isPlaying.value ? this.player.pause() : this.player.play());
    setActionHandler("pause", () => !this.player.isPlaying.value ? this.player.play() : this.player.pause());
    setActionHandler("previoustrack", () => this.player.previous());
    setActionHandler("nexttrack", () => this.player.skip());
    setActionHandler("seekbackward", details => { this.player.seekBackward(details.seekOffset || undefined); });
    setActionHandler("seekforward", details => { this.player.seekForward(details.seekOffset || undefined); });
    setActionHandler("seekto", details => { details.seekTime && this.player.seekTo(details.seekTime); });
    setActionHandler("stop", () => this.player.stop());

  }

  private updatePositionState(duration?: number) {
    if (!duration) return;
    navigator.mediaSession.setPositionState({ duration, playbackRate: this.player.input.playbackRate, position: this.player.currentTime.value});
  };
}
