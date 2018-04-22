package org.jaredstevens.utilities.pitstop.services.mileage.service;

import org.jaredstevens.utilities.pitstop.pojos.ResponseBase;
import org.jaredstevens.utilities.pitstop.services.mileage.repositories.IMileageRepository;
import org.jaredstevens.utilities.pitstop.services.mileage.entities.MileageEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/mileage")
public class MileageService {
    @Autowired
    private IMileageRepository mileageRepository;

    @RequestMapping(method = RequestMethod.GET, path = "/hello/{name}", produces = "application/json")
    public ResponseBase<MileageEntity> hello(@PathVariable final String name) {
        return new ResponseBase<MileageEntity>(
                String.format("Nice to meet you, %s!", name),
                ResponseBase.ResponseStatus.SUCCESS,
                null
        );
    }
}
