package org.jaredstevens.utilities.pitstop.services.vehicle.entities;

import javax.persistence.*;

import org.jaredstevens.utilities.pitstop.pojos.TransactionType;

@Entity
public class VehicleTransactionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransactionType action;
    @ManyToOne(optional = false)
    @JoinColumn(name = "vehicleId", nullable = false)
    private VehicleEntity vehicle;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public TransactionType getAction() {
        return action;
    }

    public void setAction(TransactionType action) {
        this.action = action;
    }

    public VehicleEntity getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleEntity vehicle) {
        this.vehicle = vehicle;
    }
}
