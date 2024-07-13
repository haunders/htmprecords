document.addEventListener('DOMContentLoaded', function () {
	new Zooming({
		bgColor: "#000",
		bgOpacity: 0.9,
		enableGrab: false,
	}).listen('.cover')
})

jQuery(function ($) {
	console.log("ой");
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = '/static/mp3/',
            tracks = [{
                "track": 1,
                "name": "Bad Romance (Intro)",
                "performer": "Молочник Павел feat. Молочник Павел",
                "duration": "0:10",
                "file": "Bad_Romance_Intro",
                "explicit": false
            }, {
                "track": 2,
                "name": "Juicy",
                "performer": "Молочник Павел feat. deluxxxxxx",
                "duration": "1:01",
                "file": "Juicy",
                "explicit": true
            }, {
                "track": 3,
                "name": "We Are Number One",
                "performer": "Молочник Павел feat. Tvoya Mamma",
                "duration": "2:23",
                "file": "We_Are_Number_One",
                "explicit": true
            }, {
                "track": 4,
                "name": "Dark Side",
                "performer": "Молочник Павел feat. Ventiblyator",
                "duration": "3:03",
                "file": "Dark_Side",
                "explicit": true
            }, {
                "track": 5,
                "name": "Chop Suey!",
                "performer": "Молочник Павел feat. Терж Сакян",
                "duration": "3:32",
                "file": "Chop_Suey",
                "explicit": true
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackPerformer = value.performer,
                    trackDuration = value.duration;
					$('#trcklst').append('<tr class="track-album"> \
						<td>' + trackNumber + '</td> \
						<td class="track_info"> \
							<p>' + trackName + '</p> \
							<p class="track-performer">' + trackPerformer + '</p> \
						</td> \
						<td class="track_duration"> \
							<div class="last"> \
								<div class="duration">' + trackDuration + '</div> \
							</div> \
						</td> \
					</tr>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('.track-title-nowplaying'),
            npPerformer = $('.track-performer-nowplaying'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#trcklst tr').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#trcklst tr:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                npPerformer.text(tracks[id].performer);
                index = id;
                audio.src = mediaPath + tracks[id].file + '.mp3';
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});