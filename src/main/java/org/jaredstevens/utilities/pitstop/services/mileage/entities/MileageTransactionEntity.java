package org.jaredstevens.utilities.pitstop.services.mileage.entities;

import javax.persistence.*;

import org.jaredstevens.utilities.pitstop.pojos.TransactionType;

@Entity
public class MileageTransactionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransactionType action;
    @ManyToOne(optional = false)
    @JoinColumn(name = "mileageId", nullable = false)
    private MileageEntity mileage;

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

    public MileageEntity getMileage() {
        return mileage;
    }

    public void setMileage(MileageEntity mileage) {
        this.mileage = mileage;
    }
}
