// Cuando ocurra el evento tareaCompletada, ejecuta esta función.
import taskEvents from '../events/task.events.js';

taskEvents.on('tareaCompletada', (tarea) => {
    console.log(`La tarea "${tarea.titulo}" fue completada correctamente`);
});
