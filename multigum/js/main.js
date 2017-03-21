/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraintsVideo = {
  video: true
};
var constraintsAudio = {
  audio: true
};

function successCallbackVideo(localMediaStream) {
  window.stream = localMediaStream; // stream available to console
  navigator.getUserMedia(constraintsAudio, successCallbackAudio, errorCallback);
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
}

function successCallbackAudio(localMediaStream) {
  window.stream.addTrack(localMediaStream.getAudioTracks()[0]);
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraintsVideo, successCallbackVideo, errorCallback);
