package org.jaredstevens.utilities.pitstop.services.vehicle.repositories;

import org.jaredstevens.utilities.pitstop.services.vehicle.entities.VehicleEntity;
import org.springframework.data.repository.CrudRepository;

public interface IVehicleRepository extends CrudRepository<VehicleEntity, Long> {
}
