export class ObtenerTareasUseCase {
    constructor(tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    async execute(userId) {
        return this.tareaRepository.obtenerTodas(userId);
    }
}
