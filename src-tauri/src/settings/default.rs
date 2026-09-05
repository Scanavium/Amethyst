use super::*;

impl Default for Appearance {
    fn default() -> Self {
        Self {
            animation_duration: 100,
            font_weight: String::from("normal"),
            theme: String::from("amethyst-dark"),
            desktop_mode: false,
            custom_colors: CustomColors::default(),
            cover_based_colors: false,
            cover_based_icon_colors: false,
            ambient_background: Background::default(),
            shader: Shader::default(),
            neon_mode: false,
            show_playback_controls: true,
            minimalist_mode: false,
            hide_category_titles: true,
            show_cover_art: true,
            compact_list: true,
            show_debug_stats: false,
        }
    }
}

impl Default for CustomColors {
    fn default() -> Self {
        Self {
            enabled: false,
            colors: CustomColorData::default(),
        }
    }
}

impl Default for CustomColorData {
    fn default() -> Self {
        Self {
            accent: String::from("#A58CDB"),
            primary: String::from("#A58CDB"),
            inspector: String::from("#94afff"),
            alert: String::from("#1fa9ff"),
        }
    }
}

impl Default for Background {
    fn default() -> Self {
        Self {
            show: false,
            opacity: 10,
            spin: true,
            blur_strength: 96,
            spin_speed: 64,
            zoom: 130,
            blend_mode: String::from("normal"),
        }
    }
}

impl Default for Shader {
    fn default() -> Self {
        Self {
            enabled: false,
            selected: String::from("none"),
        }
    }
}

impl Default for Performance {
    fn default() -> Self {
        Self {
            use_vsync: true,
            processing_concurrency: 3,
            pause_visuals_when_unfocused: false,
        }
    }
}

impl Default for Behavior {
    fn default() -> Self {
        Self {
            auto_play_on_startup: false,
            fetch_metadata_on_startup: true,
        }
    }
}

impl Default for Metering {
    fn default() -> Self {
        Self {
            loudness_meter: LoudnessMeter::default(),
            oscilloscope: Oscilloscope::default(),
            vectorscope: Vectorscope::default(),
            spectrum: Spectrum::default(),
            spectrum_line: SpectrumLine::default(),
            spectrum_bars: SpectrumBars::default(),
            spectrogram: Spectrogram::default(),
            decibel_meter: DecibelMeter::default(),
            shader: Shader::default(),
        }
    }
}

impl Default for LoudnessMeter {
    fn default() -> Self {
        Self { show: true }
    }
}

impl Default for Oscilloscope {
    fn default() -> Self {
        Self {
            show: true,
            smoothing: 0.5,
            fft_size: 8192,
            line_thickness: 1,
        }
    }
}

impl Default for Vectorscope {
    fn default() -> Self {
        Self {
            show: true,
            smoothing: 0.5,
            lissajous: true,
            fft_size: 512,
            line_thickness: 1.0,
        }
    }
}

impl Default for Spectrum {
    fn default() -> Self {
        Self {
            show: true,
            ty: String::from("line"),
        }
    }
}

impl Default for SpectrumLine {
    fn default() -> Self {
        Self {
            smoothing: 0.5,
            fft_size: 8192,
            line_thickness: 1.0,
            fill_opacity: 0.15,
            opacity_falloff: 1.0,
            max_decibels: 0.0,
            min_decibels: -128.0,
        }
    }
}

impl Default for SpectrumBars {
    fn default() -> Self {
        Self {
            smoothing: 0.5,
            fft_size: 1024,
            bars: 64,
        }
    }
}

impl Default for Spectrogram {
    fn default() -> Self {
        Self {
            smoothing: 0.0,
            fft_size: 4096,
            logarithmic: true,
            scroll_speed: 1.0,
        }
    }
}

impl Default for DecibelMeter {
    fn default() -> Self {
        Self {
            minimum_db: -60.0,
            separate_pre_post: false,
            show: true,
            fft_size: 2048,
            smoothing_duration: 60,
        }
    }
}

impl Default for Audio {
    fn default() -> Self {
        Self {
            driver: String::from("default"),
            buffer_size: 256,
            resample_rate: 44100,
            output_device_name: String::from("default"),
            output_realtime_device_name: String::from(""),
        }
    }
}

impl Default for Integrations {
    fn default() -> Self {
        Self {
            discord: Discord::default(),
            last_fm: LastFm::default(),
        }
    }
}

impl Default for Discord {
    fn default() -> Self {
        Self { enabled: true }
    }
}

impl Default for LastFm {
    fn default() -> Self {
        Self {
            enabled: false,
            enable_scrobbling: true,
            username: String::from(""),
            password: String::from(""),
            session_key: String::from(""),
        }
    }
}

impl Default for Application {
    fn default() -> Self {
        Self {
            auto_start: false,
            auto_updates_enabled: true,
            language: String::from("en-US"),
        }
    }
}

impl Default for Columns {
    fn default() -> Self {
        Self {
            cover: true,
            artist: true,
            disk_number: false,
            title: true,
            filename: false,
            album: true,
            year: true,
            play_count: false,
            skip_count: false,
            date_added: true,
            bits_per_sample: true,
            genre: false,
            bitrate: true,
            sample_rate: true,
            barcode: false,
            label: false,
            isrc: false,
            copyright: false,
            bpm: false,
            duration: true,
            track_number: true,
            location: true,
            container: true,
            favorite: true,
            size: true,
        }
    }
}
