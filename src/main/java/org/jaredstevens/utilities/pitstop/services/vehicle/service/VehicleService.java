package org.jaredstevens.utilities.pitstop.services.vehicle.service;

import org.jaredstevens.utilities.pitstop.pojos.ResponseBase;
import org.jaredstevens.utilities.pitstop.services.vehicle.repositories.IVehicleRepository;
import org.jaredstevens.utilities.pitstop.services.vehicle.entities.VehicleEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/vehicle")
public class VehicleService {
    @Autowired
    private IVehicleRepository vehicleRepository;

    @RequestMapping(method = RequestMethod.GET, path = "/hello/{name}", produces = "application/json")
    public ResponseBase<VehicleEntity> hello(@PathVariable final String name) {
        return new ResponseBase<VehicleEntity>(
                String.format("Nice to meet you, %s!", name),
                ResponseBase.ResponseStatus.SUCCESS,
                null
        );
    }
}

