// Obtener los botones para cambiar los dispositivos de video y audio
var btnChangeAudio = document.getElementById('btn-change-audio');
var btnChangeVideo = document.getElementById('btn-change-video');

// Manejar el evento de clic del botón Cambiar Audio
btnChangeAudio.onclick = function() {
    // Obtener el dispositivo de audio seleccionado en el menú desplegable
    var selectedAudioDevice = audioInputSelect.value;
    // Cambiar el dispositivo de audio
    connection.mediaConstraints.audio = {
        deviceId: { exact: selectedAudioDevice }
    };
    // Volver a configurar la conexión de transmisión
    connection.open(connection.sessionid);
};

// Manejar el evento de clic del botón Cambiar Video
btnChangeVideo.onclick = function() {
    // Obtener el dispositivo de video seleccionado en el menú desplegable
    var selectedVideoDevice = videoInputSelect.value;
    // Cambiar el dispositivo de video
    connection.mediaConstraints.video = {
        deviceId: { exact: selectedVideoDevice }
    };
    // Volver a configurar la conexión de transmisión
    connection.open(connection.sessionid);
};
// Obtener los menús desplegables para seleccionar los dispositivos de video y audio
var audioInputSelect = document.getElementById('audioSource');
var videoInputSelect = document.getElementById('videoSource');

// Obtener la lista de dispositivos de audio y video disponibles
navigator.mediaDevices.enumerateDevices().then(function(devices) {
    // Filtrar los dispositivos de audio y video
    var audioDevices = devices.filter(function(device) {
        return device.kind === 'audioinput';
    });
    var videoDevices = devices.filter(function(device) {
        return device.kind === 'videoinput';
    });

    // Llenar el menú desplegable de dispositivos de audio
    audioDevices.forEach(function(device) {
        var option = document.createElement('option');
        option.value = device.deviceId;
        option.text = device.label;
        audioInputSelect.appendChild(option);
    });

    // Llenar el menú desplegable de dispositivos de video
    videoDevices.forEach(function(device) {
        var option = document.createElement('option');
        option.value = device.deviceId;
        option.text = device.label;
        videoInputSelect.appendChild(option);
    });
}).catch(function(error) {
    console.error('Error al obtener la lista de dispositivos: ', error);
});
